import { Module } from "@nestjs/common";
import {UserRepository} from "./repository/UserRepository";
import {UserController} from "./controller/UserController";

@Module({
    controllers: [UserController],
    providers: [UserRepository],
})
export class UserModule {}
