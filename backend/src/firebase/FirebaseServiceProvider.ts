import { Injectable } from "@nestjs/common";
import { FirebaseConnectionProvider } from "./FirebaseConnectionProvider";
import {Database} from "@firebase/database";

export class FirebaseServiceProvider {
    private constructor() {}

    public static initialize(){
        FirebaseConnectionProvider.initialize()
            .then(() => console.log("Connection established successfully"))
            .catch((error) => console.log(`I got a problem in firebase connection: ${error}`));
    }

    public static getDbInstance(): Database {
        return FirebaseConnectionProvider.getDb();
    }
}
