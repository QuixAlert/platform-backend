import {Body, Controller, Get, HttpException, HttpStatus, Injectable, Param, Post} from "@nestjs/common";
import {AdoptionFeedbackRepositoryImpl} from "../repository/AdoptionFeedbackRepositoryImpl";
import {JwtService} from "@nestjs/jwt";
import {Feedback} from "../../shared/model/Feedback";

require('dotenv').config()

@Controller("adoption-feedback")
@Injectable()
export class AdoptionFeedbackController {
    constructor(
        private adoptionFeedbackRepository : AdoptionFeedbackRepositoryImpl,
    ) {}


    @Get()
    async getAllAnimalsFeedback() {
        return this.adoptionFeedbackRepository.getAll();
    }

    @Post('/register')
    async registerAnimalFeedback(@Body() feedback: Feedback){
        if(await this.adoptionFeedbackRepository.registerAdoptionFeedback(feedback)){
            return true
        } else {
            throw new HttpException(`The animal feedback could not be registered!`, HttpStatus.FORBIDDEN)
        }
    }
}