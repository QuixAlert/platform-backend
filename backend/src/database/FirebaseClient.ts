import { Database, getDatabase } from "@firebase/database";
import {FirebaseConnection} from "./FirebaseConnection";

export class FirebaseClient {
    private static firebaseDb : Database = null
    private constructor() { }

    public static async getInstance() {
        if (this.firebaseDb == null) {
            this.firebaseDb = await new FirebaseConnection().getDb()
        }
        return this.firebaseDb
    }
}