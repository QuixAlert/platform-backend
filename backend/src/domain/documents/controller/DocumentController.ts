import {Controller, Get, Injectable, Param, UseGuards} from "@nestjs/common";
import {ReportRepositoryImpl} from "../../report/repository/ReportRepositoryImpl";
import {DocumentRepositoryImpl} from "../repository/DocumentRepositoryImpl";
import {PassportTokenGuard} from "../../auth/guard/PassportTokenGuard";

@Controller("document")
@UseGuards(PassportTokenGuard)
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