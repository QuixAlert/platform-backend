import {Controller, Get, Injectable, Param, UseGuards} from "@nestjs/common";
import {AdoptionRepositoryImpl} from "../repository/AdoptionRepositoryImpl";
import {PassportTokenGuard} from "../../auth/guard/PassportTokenGuard";

@Controller("adoptions")
@UseGuards(PassportTokenGuard)
@Injectable()
export class AdoptionController {
    constructor(private adoptionRepository: AdoptionRepositoryImpl) {}

    @Get()
    async getAllAdoption() {
        return this.adoptionRepository.getAll();
    }

    @Get('/:id')
    async getByAdoptionId(@Param('id') id: string) {
        return this.adoptionRepository.getByAdoptionId(id);
    }

    @Get('/user/:id')
    async getByUserId(@Param('id') id: string) {
        return this.adoptionRepository.getByUserId(id);
    }
}