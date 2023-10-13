import { Module } from "@nestjs/common";
import {FirebaseModule} from "../firebase/FirebaseModule";
import {UserRepository} from "./repository/UserRepository";
import {FirebaseServiceProvider} from "../firebase/FirebaseServiceProvider";
import {UserController} from "./controller/UserController";

@Module({
    imports: [FirebaseModule],
    controllers: [UserController],
    providers: [UserRepository],
})
export class UserModule {}
