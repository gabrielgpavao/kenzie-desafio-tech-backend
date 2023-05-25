import { Injectable } from '@nestjs/common'
import { ClientsService } from '../clients/clients.service'
import { compare } from 'bcryptjs'

@Injectable()
export class AuthService {
	constructor(private clientsService: ClientsService) {}

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
}
