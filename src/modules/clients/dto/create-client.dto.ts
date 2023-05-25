import { IsString, IsEmpty, IsEmail, MaxLength } from 'class-validator'
import { Transform } from 'class-transformer'
import { hashSync } from 'bcryptjs'

export class CreateClientDto {
	@IsString()
	@IsEmpty()
	@MaxLength(127)
		fullName: string

	@IsEmail()
	@IsEmpty()
	@MaxLength(127)
		email: string

	@IsString()
	@IsEmpty()
	@Transform(({ value }: { value: string }) => hashSync(value, 10), {
		groups: ['transform']
	})
		password: string

	@IsString()
	@IsEmpty()
	@MaxLength(11)
		phoneNumber: string
}
