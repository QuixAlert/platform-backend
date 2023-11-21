import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {ConfigService} from "@nestjs/config";

interface JwtPayload {
    sub: string,
    role: string
}

@Injectable()
export class PassportTokenStrategy extends PassportStrategy(Strategy,'jwt') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN_SECRET')
        });
    }

    validate(payload: JwtPayload){
        return payload
    }
}