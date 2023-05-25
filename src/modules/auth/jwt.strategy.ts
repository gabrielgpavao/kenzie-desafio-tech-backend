import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import 'dotenv/config'

interface iPayload {
	sub: number
	email: string
}

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.SECRET_KEY
		})
	}

	async validate(payload: iPayload) {
		return {
			id: payload.sub,
			email: payload.email
		}
	}
}
