import {Controller, Get, Injectable, Param, UseGuards, HttpException, HttpStatus, Post} from "@nestjs/common";
import {Body} from "@nestjs/common"
import {AnimalRepositoryImpl} from "../repository/AnimalRepositoryImpl";
import {PassportTokenGuard} from "../../auth/guard/PassportTokenGuard";

@Controller("animals")
@UseGuards(PassportTokenGuard)
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

    @Post('/register')
    async registerAnimal(@Body() animal: Animal){
        if(await this.animalRepository.registerAnimal(animal)){
            return true
        } else {
            throw new HttpException(`The password could not be registered!`, HttpStatus.FORBIDDEN)
        }
    }
}