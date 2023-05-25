import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@Controller('contacts')
export class ContactsController {
	constructor(private readonly contactsService: ContactsService) {}

	@Post()
	create(@Body() createContactDto: CreateContactDto, @Request() request) {
		return this.contactsService.create(createContactDto, Number(request.user.id))
	}

	@Get()
	findAll(@Request() request) {
		return this.contactsService.list(Number(request.user.id))
	}

	@Get(':id')
	findOne(@Param('id') id: number, @Request() request) {
		return this.contactsService.retrieve(id, Number(request.user.id))
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
