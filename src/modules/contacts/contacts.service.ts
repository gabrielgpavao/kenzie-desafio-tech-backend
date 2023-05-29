import { Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { ContactRepository } from './repositories/contact.repository'

@Injectable()
export class ContactsService {
	constructor(private contactRepository: ContactRepository) {}

	async create(contactData: CreateContactDto, clientId: number) {
		return await this.contactRepository.create(contactData, clientId)
	}

	async list(clientId: number) {
		return await this.contactRepository.list(clientId)
	}

	async retrieve(id: number, clientId: number) {
		return await this.contactRepository.retrieve(id, clientId)
	}

	async update(id: number, clientData: UpdateContactDto) {
		return await this.contactRepository.update(id, clientData)
	}

	async delete(id: number) {
		return await this.contactRepository.delete(id)
	}
}
