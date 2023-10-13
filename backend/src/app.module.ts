import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FirebaseController} from "./firebase.controller";
import {FirebaseService} from "./firebase.service";

@Module({
  imports: [],
  controllers: [AppController, FirebaseController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
