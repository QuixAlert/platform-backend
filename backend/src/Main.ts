import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './ApplicationModule';
import {FirebaseConnectionProvider} from "./firebase/FirebaseConnectionProvider";
require('dotenv').config()

async function bootstrap() {
  await FirebaseConnectionProvider.initialize()
      .then(() => console.log("Connection established successfully"))
      .catch((error) => console.log(`I got a problem in firebase connection: ${error}`));

  const app = await NestFactory.create(ApplicationModule);
  const port = process.env.PORT || 3000
  await app.listen(port);
  console.log(`Application running on port ${port}`)
}

bootstrap();
