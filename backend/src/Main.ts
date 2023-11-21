import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './ApplicationModule';
import {FirebaseConnectionProvider} from "./infra/firebase/FirebaseConnectionProvider";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
require('dotenv').config()

async function bootstrap() {
  await FirebaseConnectionProvider.initialize()
      .then(() => console.log("Connection established successfully"))
      .catch((error) => console.log(`I got a problem in firebase connection: ${error}`));

  const app = await NestFactory.create(ApplicationModule);
  const port = process.env.PORT || 3000

  const config = new DocumentBuilder()
      .setTitle('QuixAlert Backend!')
      .setDescription('The quixalert API description')
      .setVersion('1.0')
      .addTag('quixalert')
      .build();
  // @ts-ignore
  const document = SwaggerModule.createDocument(app, config);
  // @ts-ignore
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Application running on port ${port}`)
}

bootstrap();
