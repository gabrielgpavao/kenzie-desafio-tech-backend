import { Injectable } from '@nestjs/common'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { ClientRepository } from './repositories/client.repository'

@Injectable()
export class ClientsService {
	constructor(private clientRepository: ClientRepository) {}

	async create(clientData: CreateClientDto) {
		return await this.clientRepository.create(clientData)
	}

	async list() {
		return await this.clientRepository.list()
	}

	async retrieve(id: number) {
		return await this.clientRepository.retrieve(id)
	}

	async retrieveBy(params: { id: number } | { email: string } | { phoneNumber: string }) {
		return await this.clientRepository.retrieveBy(params)
	}

	async update(id: number, clientData: UpdateClientDto) {
		return await this.clientRepository.update(id, clientData)
	}

	async delete(id: number) {
		return await this.clientRepository.delete(id)
	}
}
