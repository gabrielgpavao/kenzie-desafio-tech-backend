import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Client } from '../clients/entities/client.entity'
import { LocalAuthGuard } from './local-auth.guard'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post()
	async login(@Body() client: Client) {
		return this.authService.login(client)
	}
}
