import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FirebaseInitializerProvider} from "./database/firebaseInitializer.provider";
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  await app.listen(port);
  console.log(`Application running on port ${port}`)
}

bootstrap();
