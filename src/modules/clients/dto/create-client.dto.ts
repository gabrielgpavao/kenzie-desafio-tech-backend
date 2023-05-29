import { IsString, IsEmail, MaxLength, IsNotEmpty, Length } from 'class-validator'
import { Transform } from 'class-transformer'
import { hashSync } from 'bcryptjs'
import { ApiProperty } from '@nestjs/swagger'

export class CreateClientDto {
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
	@Transform(({ value }: { value: string }) => hashSync(value, 10), {
		groups: ['transform']
	})
		password: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Length(11, 11)
		phoneNumber: string
}
