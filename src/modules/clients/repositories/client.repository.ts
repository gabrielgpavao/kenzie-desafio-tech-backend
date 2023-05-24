import { Client } from '@prisma/client'
import { CreateClientDto } from '../dto/create-client.dto'
import { UpdateClientDto } from '../dto/update-client.dto'

export abstract class ClientRepository {
	abstract create(data: CreateClientDto): Promise<Client>
	abstract list(): Promise<Client[]>;
	abstract retrieve(id: string): Promise<Client>;
	abstract update(id: string, data: UpdateClientDto): Promise<Client>;
	abstract delete(id: string): Promise<void> | void;
}
