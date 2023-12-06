import {Module} from "@nestjs/common";
import {AnimalController} from "../animal/controller/AnimalController";
import {AnimalRepositoryImpl} from "../animal/repository/AnimalRepositoryImpl";
import {AdoptionFeedbackController} from "./controller/adoption-feedback-controller.service";
import {AdoptionFeedbackRepositoryImpl} from "./repository/AdoptionFeedbackRepositoryImpl";

@Module({
    controllers: [AdoptionFeedbackController],
    providers: [AdoptionFeedbackRepositoryImpl],
})
export class AdoptionFeedbackModule {}