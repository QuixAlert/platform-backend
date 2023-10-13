import { Module } from '@nestjs/common';
import {FirebaseController} from "./firebase.controller";
import {FirebaseService} from "./firebase.service";
import {FirebaseClientProvider} from "./database/firebaseClient.provider";
import {FirebaseInitializerProvider} from "./database/firebaseInitializer.provider";

@Module({
  imports: [],
  controllers: [ FirebaseController],
  providers: [ FirebaseService ],
})
export class AppModule {}
