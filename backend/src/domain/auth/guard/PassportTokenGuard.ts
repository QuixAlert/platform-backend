import {AuthGuard} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PassportTokenGuard extends AuthGuard('jwt') {

}