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
import {ReportModule} from "./domain/report/ReportModule";
import {ReportController} from "./domain/report/controller/ReportController";
import {ReportRepositoryImpl} from "./domain/report/repository/ReportRepositoryImpl";
import {DocumentModule} from "./domain/documents/DocumentModule";
import {DocumentController} from "./domain/documents/controller/DocumentController";
import {DocumentRepositoryImpl} from "./domain/documents/repository/DocumentRepositoryImpl";
import {AuthModule} from "./domain/auth/AuthModule";
import {AuthController} from "./domain/auth/controller/AuthController";
import {AuthRepositoryImpl} from "./domain/auth/repository/AuthRepositoryImpl";
import {JwtService} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
      AppUserModule, AnimalModule, AdoptionModule,
      ReportModule, DocumentModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [
      AppUserController, AnimalController, AdoptionController,
      ReportController, DocumentController, AuthController
  ],
  providers: [
      AppUserRepository, AnimalRepositoryImpl, AdoptionRepositoryImpl,
      ReportRepositoryImpl, DocumentRepositoryImpl, AuthRepositoryImpl,
      JwtService, ConfigService
  ],
})
export class ApplicationModule {}
