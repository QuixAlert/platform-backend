import {Controller, Get, Injectable, Param} from "@nestjs/common";
import {AnimalRepositoryImpl} from "../../animal/repository/AnimalRepositoryImpl";
import {ReportRepositoryImpl} from "../repository/ReportRepositoryImpl";

@Controller("report")
@Injectable()
export class ReportController {
    constructor(private reportRepository: ReportRepositoryImpl) {}

    @Get()
    async getAllReports() {
        return this.reportRepository.getAll();
    }

    @Get('/:id')
    async getReportById(@Param('id') id: string){
        return this.reportRepository.getByReportId(id)
    }

    @Get('/user/:id')
    async getReportByUserId(@Param('id') id: string){
        return this.reportRepository.getByUserId(id)
    }
}