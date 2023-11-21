import {UserRole} from "../model/User";
import {SetMetadata} from "@nestjs/common";

export const ROLE_KEY = 'role'
export const Role = (role: UserRole) => SetMetadata(ROLE_KEY, role)