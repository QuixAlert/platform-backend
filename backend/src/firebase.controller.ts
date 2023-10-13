import {Controller, Get, Param, Req} from "@nestjs/common";
import {FirebaseService} from "./firebase.service";
import {Helpers} from "./utils/Helpers";

@Controller("firebase")
export class FirebaseController {
    constructor(private readonly firebaseService: FirebaseService) {}

    @Get("users")
    getUsers(){
        this.firebaseService.getUsers()
    }
}