import { IsString, IsEmail, MaxLength, IsNotEmpty } from 'class-validator'

export class CreateContactDto {
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
	@MaxLength(11)
		phoneNumber: string
}
