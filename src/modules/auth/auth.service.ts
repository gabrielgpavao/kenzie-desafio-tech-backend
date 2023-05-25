import { Injectable } from '@nestjs/common'
import { ClientsService } from '../clients/clients.service'
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(
		private clientsService: ClientsService,
		private jwtService: JwtService
	) {}

	async validateClient(email: string, password: string) {
		const client = await this.clientsService.retrieveBy({ email })

		const isValidPassword = await compare(password, client.password)
		if (client && isValidPassword) {
			return {
				id: client.id,
				email: client.email
			}
		}

		return null
	}

	async login(email: string) {
		const client = await this.clientsService.retrieveBy({ email })

		return {
			token: this.jwtService.sign({ email }, { subject: client.id + '' })
		}
	}
}
