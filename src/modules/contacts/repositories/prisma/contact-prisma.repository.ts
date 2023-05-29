import { CreateContactDto } from '../../dto/create-contact.dto'
import { UpdateContactDto } from '../../dto/update-contact.dto'
import { ContactRepository } from '../contact.repository'
import { PrismaService } from 'src/server/prisma.service'
import { Contact } from '../../entities/contact.entity'
import { plainToInstance } from 'class-transformer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateContactDto, clientId: number): Promise<Contact> {
		const contact = new Contact()
		Object.assign(contact, { data })

		const newContact = await this.prisma.contact.create({
			data: {
				...data,
				clientId
			}
		})

		return plainToInstance(Contact, newContact)
	}

	async list(clientId: number): Promise<Contact[]> {
		const contactsList = await this.prisma.contact.findMany({
			where: { clientId }
		})

		return plainToInstance(Contact, contactsList)
	}

	async retrieve(id: number, clientId: number): Promise<Contact> {
		const contact = await this.prisma.contact.findFirstOrThrow({
			where: {
				id,
				clientId
			}
		})

		return plainToInstance(Contact, contact)
	}

	async update(id: number, data: UpdateContactDto): Promise<Contact> {
		const updatedContact = await this.prisma.contact.update({
			where: { id },
			data
		})

		return plainToInstance(Contact, updatedContact)
	}

	async delete(id: number): Promise<void> {
		await this.prisma.contact.delete({
			where: { id }
		})
	}
}
