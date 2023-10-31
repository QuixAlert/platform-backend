import {Controller, Get, Injectable, Param} from "@nestjs/common";
import {AnimalRepositoryImpl} from "../repository/AnimalRepositoryImpl";

@Controller("animals")
@Injectable()
export class AnimalController {
    constructor(private animalRepository: AnimalRepositoryImpl) {}

    @Get()
    async getAllAnimals() {
        return this.animalRepository.getAll();
    }

    @Get('/:id')
    async getAnimalById(@Param('id') id: string){
        return this.animalRepository.getByAnimalId(id)
    }

    @Get('/user/:id')
    async getAnimalByUserId(@Param('id') id: string){
        return this.animalRepository.getByUserId(id)
    }
}