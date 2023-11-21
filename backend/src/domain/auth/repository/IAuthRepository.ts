import {User} from "../model/User";

export interface IAuthRepository {
    register(registerDto: RegisterDto): Promise<boolean>
    login(loginDto: LoginDto): Promise<boolean>
    getUserByEmail(email: string): Promise<User>
}