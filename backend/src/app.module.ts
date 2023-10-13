import { Module } from '@nestjs/common';
import {FirebaseController} from "./firebase.controller";
import {FirebaseService} from "./firebase.service";

@Module({
  imports: [],
  controllers: [ FirebaseController],
  providers: [ FirebaseService],
})
export class AppModule {}
