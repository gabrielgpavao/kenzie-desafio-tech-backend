import { IsString, IsEmpty, IsEmail, MaxLength } from 'class-validator'

export class CreateContactDto {
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
	@MaxLength(11)
		phoneNumber: string
}
