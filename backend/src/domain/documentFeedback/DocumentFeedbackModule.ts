import {Module} from "@nestjs/common";
import { DocumentFeedbackController } from "./controller/DocumentFeedbackController";
import { DocumentFeedbackRepositoryImpl } from "./repository/DocumentFeedbackRepositoryImpl";

@Module({
  controllers: [DocumentFeedbackController],
  providers: [DocumentFeedbackRepositoryImpl],
})
export class DocumentFeedbackModule {}