import {Module} from "@nestjs/common";
import {ReportController} from "../report/controller/ReportController";
import {ReportRepositoryImpl} from "../report/repository/ReportRepositoryImpl";
import {DocumentController} from "./controller/DocumentController";
import {DocumentRepositoryImpl} from "./repository/DocumentRepositoryImpl";

@Module({
    controllers: [DocumentController],
    providers: [DocumentRepositoryImpl],
})
export class DocumentModule {}