import {Body, Controller, Get, HttpException, HttpStatus, Injectable, Param, Post} from "@nestjs/common";
import {Feedback} from "../../shared/model/Feedback";
import {DocumentFeedbackRepositoryImpl} from "../repository/DocumentFeedbackRepositoryImpl";

require('dotenv').config()

@Controller("document-feedback")
@Injectable()
export class DocumentFeedbackController {
    constructor(
        private documentFeedbackRepository : DocumentFeedbackRepositoryImpl,
    ) {}


    @Get()
    async getAllDocumentFeedback() {
        return this.documentFeedbackRepository.getAll();
    }

    @Post('/register')
    async registerDocumentFeedback(@Body() feedback: Feedback){
        if(await this.documentFeedbackRepository.registerDocumentFeedback(feedback)){
            return true
        } else {
            throw new HttpException(`The document feedback could not be registered!`, HttpStatus.FORBIDDEN)
        }
    }
}