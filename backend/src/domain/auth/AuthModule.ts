import {Module} from "@nestjs/common";
import {AuthController} from "./controller/AuthController";
import {AuthRepositoryImpl} from "./repository/AuthRepositoryImpl";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {PassportTokenStrategy} from "./passport/PassportTokenStrategy";

@Module({
    imports: [
        JwtModule.register({})
    ],
    controllers: [AuthController],
    providers: [AuthRepositoryImpl, PassportTokenStrategy],
})
export class AuthModule {}
