import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { ClientsController } from './clients.controller'
import { PrismaService } from 'src/server/prisma.service'
import { ClientRepository } from './repositories/client.repository'
import { ClientPrismaRepository } from './repositories/prisma/client-prisma.repository'

@Module({
	controllers: [ClientsController],
	providers: [
		ClientsService,
		PrismaService,
		{
			provide: ClientRepository,
			useClass: ClientPrismaRepository
		}
	]
})
export class ClientsModule {}
