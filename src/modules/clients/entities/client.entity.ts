import { Exclude } from 'class-transformer'

export class Client {
	readonly id: number
	fullName: string
	email: string

	@Exclude()
		password: string

	phoneNumber: string
	readonly createdAt: Date
}
