import { Module } from '@nestjs/common';
import {AppUserController} from "./domain/appUser/controller/AppUserController";
import {AppUserModule} from "./domain/appUser/AppUserModule";
import {AppUserRepository} from "./domain/appUser/repository/app-user-repository.service";
import {AnimalModule} from "./domain/animal/AnimalModule";
import {AnimalController} from "./domain/animal/controller/AnimalController";
import {AnimalRepositoryImpl} from "./domain/animal/repository/AnimalRepositoryImpl";
import {AdoptionModule} from "./domain/adoption/AdoptionModule";
import {AdoptionController} from "./domain/adoption/controller/AdoptionController";
import {AdoptionRepositoryImpl} from "./domain/adoption/repository/AdoptionRepositoryImpl";

@Module({
  imports: [ AppUserModule, AnimalModule, AdoptionModule ],
  controllers: [ AppUserController, AnimalController, AdoptionController ],
  providers: [ AppUserRepository, AnimalRepositoryImpl, AdoptionRepositoryImpl ],
})
export class ApplicationModule {}
