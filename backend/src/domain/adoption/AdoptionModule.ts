import {Module} from "@nestjs/common";
import {AdoptionController} from "./controller/AdoptionController";
import {AdoptionRepositoryImpl} from "./repository/AdoptionRepositoryImpl";

@Module({
    controllers: [AdoptionController],
    providers: [AdoptionRepositoryImpl],
})
export class AdoptionModule {}