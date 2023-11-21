import {Controller, Get, Injectable, Param} from "@nestjs/common";
import {ReportRepositoryImpl} from "../../report/repository/ReportRepositoryImpl";
import {DocumentRepositoryImpl} from "../repository/DocumentRepositoryImpl";

@Controller("document")
@Injectable()
export class DocumentController {
    constructor(private documentRepository: DocumentRepositoryImpl) {}

    @Get()
    async getAllDocuments() {
        return this.documentRepository.getAll();
    }

    @Get('/:id')
    async getDocumentById(@Param('id') id: string){
        return this.documentRepository.getByDocumentId(id)
    }

    @Get('/user/:id')
    async getDocumentByUserId(@Param('id') id: string){
        return this.documentRepository.getByUserId(id)
    }
}