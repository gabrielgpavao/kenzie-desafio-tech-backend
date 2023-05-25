import { CreateClientDto } from '../../dto/create-client.dto'
import { UpdateClientDto } from '../../dto/update-client.dto'
import { ClientRepository } from '../client.repository'
import { PrismaService } from 'src/server/prisma.service'
import { Client } from '../../entities/client.entity'
import { plainToInstance } from 'class-transformer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ClientPrismaRepository implements ClientRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateClientDto): Promise<Client> {
		const client = new Client()
		Object.assign(client, { data })

		const newClient = await this.prisma.client.create({ data })

		return plainToInstance(Client, newClient)
	}

	async list(): Promise<Client[]> {
		const clientsList = await this.prisma.client.findMany()

		return plainToInstance(Client, clientsList)
	}

	async retrieve(id: number): Promise<Client> {
		const client = await this.prisma.client.findUniqueOrThrow({
			where: { id }
		})

		return plainToInstance(Client, client)
	}

	async retrieveBy(params: { id: number } | { email: string } | { phoneNumber: string }): Promise<Client> {
		return await this.prisma.client.findUniqueOrThrow({	where: params })
	}

	async update(id: number, data: UpdateClientDto): Promise<Client> {
		const updatedClient = await this.prisma.client.update({
			where: { id },
			data
		})

		return plainToInstance(Client, updatedClient)
	}

	async delete(id: number): Promise<void> {
		await this.prisma.client.delete({
			where: { id }
		})
	}
}
