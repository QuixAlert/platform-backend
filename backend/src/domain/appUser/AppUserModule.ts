import { Module } from "@nestjs/common";
import {AppUserRepository} from "./repository/app-user-repository.service";
import {AppUserController} from "./controller/AppUserController";

@Module({
    controllers: [AppUserController],
    providers: [AppUserRepository],
})
export class AppUserModule {}
