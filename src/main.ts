import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = new DocumentBuilder()
		.setTitle('Desafio Tech')
		.setDescription('Documentação da API criada para o Backend do Desafio Kenze Tech Full Stack.')
		.setVersion('1.0')
		.addTag('Clients')
		.addBearerAuth()
		.addTag('Contacts')
		.addBearerAuth()
		.addTag('Login')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.enableCors({
		origin: [
			'http://localhost:5173',
			'http://localhost:3000',
			'https://desafio-kenzie-app.vercel.app/'
		]
	})

	app.useGlobalPipes(
		new ValidationPipe({ whitelist: true }),
		new ValidationPipe({
			transform: true,
			transformOptions: { groups: ['transform'] }
		})
	)

	await app.listen(3001, () => {
		console.log('Server connected and running on port 3001!')
	})
}
bootstrap()
