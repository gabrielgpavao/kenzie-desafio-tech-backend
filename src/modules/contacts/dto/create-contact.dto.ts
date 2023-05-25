import { IsString, IsEmail, MaxLength, IsNotEmpty, Length } from 'class-validator'

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
	@Length(11, 11)
		phoneNumber: string
}
