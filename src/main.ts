import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const PORT = process.env.APP_PORT || 3001

	await app.listen(PORT, () => {
		console.log(`Server connected and running on port ${PORT}!`)
	})
}
bootstrap()
