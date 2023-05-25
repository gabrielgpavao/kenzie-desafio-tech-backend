import { IsString, IsEmail, MaxLength, IsNotEmpty } from 'class-validator'
import { Transform } from 'class-transformer'
import { hashSync } from 'bcryptjs'

export class CreateClientDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(127)
		fullName: string

	@IsEmail()
	@IsNotEmpty()
	@MaxLength(127)
		email: string

	@IsString()
	@IsNotEmpty()
	@Transform(({ value }: { value: string }) => hashSync(value, 10), {
		groups: ['transform']
	})
		password: string

	@IsString()
	@IsNotEmpty()
	@MaxLength(11)
		phoneNumber: string
}
