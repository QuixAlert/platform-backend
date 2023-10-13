import {Controller, Get, Injectable} from "@nestjs/common";
import {UserRepository} from "../repository/UserRepository";

@Controller("users")
@Injectable()
export class UserController {
    constructor(private userRepository: UserRepository) {}

    @Get()
    async getAllUsers() {
        return this.userRepository.getAll();
    }
}
