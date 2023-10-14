import { Module } from '@nestjs/common';
import {UserController} from "./user/controller/UserController";
import {UserModule} from "./user/UserModule";
import {UserRepository} from "./user/repository/UserRepository";

@Module({
  imports: [ UserModule ],
  controllers: [ UserController ],
  providers: [ UserRepository ],
})
export class ApplicationModule {}
