import { Injectable } from '@nestjs/common'
import { ClientsService } from '../clients/clients.service'
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { Client } from '../clients/entities/client.entity'

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

	async login(client: Client) {
		const payload = {
			sub: client.id,
			email: client.email
		}

		return {token: this.jwtService.sign(payload)}
	}
}
