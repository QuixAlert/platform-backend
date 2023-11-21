import {Controller, Get, Injectable, Param, UseGuards} from "@nestjs/common";
import {AppUserRepository} from "../repository/app-user-repository.service";
import {PassportTokenGuard} from "../../auth/guard/PassportTokenGuard";

@Controller("users-firebase")
@UseGuards(PassportTokenGuard)
@Injectable()
export class AppUserController {
    constructor(private userRepository: AppUserRepository) {}

    @Get()
    async getAllUsers() {
        return this.userRepository.getAll();
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string) {
        return this.userRepository.getById(id)
    }
}
