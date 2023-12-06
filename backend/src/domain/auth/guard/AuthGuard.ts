import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs";
import {Reflector} from "@nestjs/core";
import {UserRole} from "../model/User";
import {ROLE_KEY} from "../decorators/Role";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }
    canActivate(context: ExecutionContext): boolean {
        const requiredRole = this.reflector.getAllAndOverride<UserRole>(
            ROLE_KEY, [
                context.getHandler(),
                context.getClass()
            ]
        )

        if(!requiredRole){
            return true
        }

        const { user } = context.switchToHttp().getRequest()
        return user.role === requiredRole
    }

}