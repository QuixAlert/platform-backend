import { FirebaseService } from "./firebase.service";
export declare class FirebaseController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    getUsers(): void;
}
