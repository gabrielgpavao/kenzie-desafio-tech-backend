import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'

@Controller('contacts')
export class ContactsController {
	constructor(private readonly contactsService: ContactsService) {}

	@Post()
	create(@Body() createContactDto: CreateContactDto) {
		// Trocar o parâmetro estático de clientId para o id por meio do Token
		return this.contactsService.create(createContactDto, 1)
	}

	@Get()
	findAll() {
		// Trocar o parâmetro estático de clientId para o id por meio do Token
		return this.contactsService.list(1)
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		// Trocar o parâmetro estático de clientId para o id por meio do Token
		return this.contactsService.retrieve(id, 1)
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateContactDto: UpdateContactDto) {
		return this.contactsService.update(id, updateContactDto)
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.contactsService.delete(id)
	}
}
