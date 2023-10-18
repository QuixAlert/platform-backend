import { Module } from '@nestjs/common';
import {AppUserController} from "./domain/appUser/controller/AppUserController";
import {AppUserModule} from "./domain/appUser/AppUserModule";
import {AppUserRepository} from "./domain/appUser/repository/app-user-repository.service";

@Module({
  imports: [ AppUserModule ],
  controllers: [ AppUserController ],
  providers: [ AppUserRepository ],
})
export class ApplicationModule {}
