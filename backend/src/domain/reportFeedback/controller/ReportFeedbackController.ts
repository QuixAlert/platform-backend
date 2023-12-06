import {Body, Controller, Get, HttpException, HttpStatus, Injectable, Param, Post} from "@nestjs/common";
import {Feedback} from "../../shared/model/Feedback";
import {ReportFeedbackRepositoryImpl} from "../repository/ReportFeedbackRepositoryImpl";

require('dotenv').config()

@Controller("report-feedback")
@Injectable()
export class ReportFeedbackController {
    constructor(
        private reportFeedbackRepository : ReportFeedbackRepositoryImpl,
    ) {}


    @Get()
    async getAllReportFeedback() {
        return this.reportFeedbackRepository.getAll();
    }

    @Post('/register')
    async registerDocumentFeedback(@Body() feedback: Feedback){
        if(await this.reportFeedbackRepository.registerReportFeedback(feedback)){
            return true
        } else {
            throw new HttpException(`The report feedback could not be registered!`, HttpStatus.FORBIDDEN)
        }
    }
}