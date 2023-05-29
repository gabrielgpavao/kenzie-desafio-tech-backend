import { IsString, IsEmail, MaxLength, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@MaxLength(127)
		fullName: string

	@ApiProperty()
	@IsEmail()
	@IsNotEmpty()
	@MaxLength(127)
		email: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Length(11, 11)
		phoneNumber: string
}
