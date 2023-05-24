import { Client } from '@prisma/client'
import { CreateClientDto } from '../dto/create-client.dto'
import { UpdateClientDto } from '../dto/update-client.dto'

export abstract class ClientRepository {
	abstract create(data: CreateClientDto): Promise<Client>
	abstract list(): Promise<Client[]>;
	abstract retrieve(id: number): Promise<Client>;
	abstract update(id: number, data: UpdateClientDto): Promise<Client>;
	abstract delete(id: number): Promise<void>;
}
