import { Module } from '@nestjs/common';
import {FirebaseModule} from "./firebase/FirebaseModule";
import {UserController} from "./user/controller/UserController";
import {UserModule} from "./user/UserModule";
import {UserRepository} from "./user/repository/UserRepository";

@Module({
  imports: [ FirebaseModule, UserModule ],
  controllers: [ UserController ],
  providers: [ UserRepository ],
})
export class ApplicationModule {}
