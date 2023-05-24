import { Client } from '@prisma/client'
import { CreateClientDto } from '../../dto/create-client.dto'
import { UpdateClientDto } from '../../dto/update-client.dto'
import { ClientRepository } from '../client.repository'
import { PrismaService } from 'src/server/prisma.service'

export class ClientPrismaRepository implements ClientRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateClientDto): Promise<Client> {
		return await this.prisma.client.create({ data })
	}

	async list(): Promise<Client[]> {
		return await this.prisma.client.findMany()
	}

	async retrieve(id: number): Promise<Client> {
		return await this.prisma.client.findUniqueOrThrow({
			where: { id }
		})
	}

	async update(id: number, data: UpdateClientDto): Promise<Client> {
		return await this.prisma.client.update({
			where: { id },
			data
		})
	}

	async delete(id: number): Promise<void> {
		await this.prisma.client.delete({
			where: { id }
		})
	}
}
