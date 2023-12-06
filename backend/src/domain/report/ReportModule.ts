import {Module} from "@nestjs/common";
import {ReportController} from "./controller/ReportController";
import {ReportRepositoryImpl} from "./repository/ReportRepositoryImpl";

@Module({
    controllers: [ReportController],
    providers: [ReportRepositoryImpl],
})
export class ReportModule {}