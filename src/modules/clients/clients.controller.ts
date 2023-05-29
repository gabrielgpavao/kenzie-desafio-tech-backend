import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
	constructor(private readonly clientsService: ClientsService) {}

	@Post()
	create(@Body() createClientDto: CreateClientDto) {
		return this.clientsService.create(createClientDto)
	}

	@Get()
	list() {
		return this.clientsService.list()
	}

	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	retrieve(@Param('id') id: number) {
		return this.clientsService.retrieve(id)
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
		return this.clientsService.update(id, updateClientDto)
	}

	@HttpCode(204)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.clientsService.delete(id)
	}
}
