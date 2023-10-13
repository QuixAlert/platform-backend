import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './ApplicationModule';
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const port = process.env.PORT || 3000
  await app.listen(port);
  console.log(`Application running on port ${port}`)
}

bootstrap();
