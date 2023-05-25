import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { LoginDto } from './dto/login.dto'

@Controller('login')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post()
	async login(@Body() clientCredentials: LoginDto) {
		return this.authService.login(clientCredentials.email)
	}
}
