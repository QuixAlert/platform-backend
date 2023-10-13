import {FirebaseClientProvider} from "./firebaseClient.provider";
import {Injectable} from "@nestjs/common";

@Injectable()
export class FirebaseInitializerProvider {
    constructor() {
        FirebaseClientProvider.initialize()
            .then(() => console.log("Database initialized successfully"))
            .catch(() => console.log("Database wasn't initialized successfully"))
    }
}