import { CreateContactDto } from '../dto/create-contact.dto'
import { UpdateContactDto } from '../dto/update-contact.dto'
import { Contact } from '../entities/contact.entity'

export abstract class ContactRepository {
	abstract create(data: CreateContactDto, clientId: number): Promise<Contact>
	abstract list(clientId: number): Promise<Contact[]>;
	abstract retrieve(id: number, clientId: number): Promise<Contact>;
	abstract update(id: number, data: UpdateContactDto): Promise<Contact>;
	abstract delete(id: number): Promise<void>;
}
