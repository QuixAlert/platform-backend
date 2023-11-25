import {Module} from "@nestjs/common";
import { ReportFeedbackController } from "./controller/ReportFeedbackController";
import { ReportFeedbackRepositoryImpl } from "./repository/ReportFeedbackRepositoryImpl";


@Module({
  controllers: [ReportFeedbackController],
  providers: [ReportFeedbackRepositoryImpl],
})
export class ReportFeedbackModule {}