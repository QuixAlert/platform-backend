import {Controller, Get, Injectable, Param} from "@nestjs/common";
import {AdoptionRepositoryImpl} from "../repository/AdoptionRepositoryImpl";

@Controller("adoptions")
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