import {Module} from "@nestjs/common";
import {AnimalController} from "./controller/AnimalController";
import {AnimalRepositoryImpl} from "./repository/AnimalRepositoryImpl";

@Module({
    controllers: [AnimalController],
    providers: [AnimalRepositoryImpl],
})
export class AnimalModule {}