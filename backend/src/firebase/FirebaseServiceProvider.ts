import { Injectable } from "@nestjs/common";
import { FirebaseConnectionProvider } from "./FirebaseConnectionProvider";
import {Database} from "@firebase/database";

@Injectable()
export class FirebaseServiceProvider {
    constructor() {
        FirebaseConnectionProvider.initialize()
            .then(() => console.log("Connection established successfully"))
            .catch((error) => console.log(`I got a problem in firebase connection: ${error}`));
    }

    public getDbInstance(): Database {
        return FirebaseConnectionProvider.getDb();
    }
}
