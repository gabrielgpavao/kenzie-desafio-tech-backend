import { Module } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { ContactsController } from './contacts.controller'
import { PrismaService } from 'src/server/prisma.service'
import { ContactRepository } from './repositories/contact.repository'
import { ContactPrismaRepository } from './repositories/prisma/contact-prisma.repository'

@Module({
	controllers: [ContactsController],
	providers: [
		ContactsService,
		PrismaService,
		{
			provide: ContactRepository,
			useClass: ContactPrismaRepository
		}
	]
})
export class ContactsModule {}
