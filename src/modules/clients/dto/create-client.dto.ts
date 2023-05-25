import { IsString, IsEmail, MaxLength, IsNotEmpty, Length } from 'class-validator'
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
	@Length(11, 11)
		phoneNumber: string
}
