import { Module } from '@nestjs/common';
import {AppUserController} from "./domain/appUser/controller/AppUserController";
import {AppUserModule} from "./domain/appUser/AppUserModule";
import {AppUserRepository} from "./domain/appUser/repository/app-user-repository.service";
import {AnimalModule} from "./domain/animal/AnimalModule";
import {AnimalController} from "./domain/animal/controller/AnimalController";
import {AnimalRepositoryImpl} from "./domain/animal/repository/AnimalRepositoryImpl";

@Module({
  imports: [ AppUserModule, AnimalModule ],
  controllers: [ AppUserController, AnimalController ],
  providers: [ AppUserRepository, AnimalRepositoryImpl ],
})
export class ApplicationModule {}
