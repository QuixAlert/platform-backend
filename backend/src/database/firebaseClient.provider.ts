import { Database, getDatabase } from "@firebase/database";
import {FirebaseConnectionProvider} from "./firebaseConnection.provider";

export class FirebaseClientProvider {
    private static firebaseDb : Database = null
    private constructor() { }

    public static async initialize(): Promise<void> {
        if (this.firebaseDb === null){
            const connection = new FirebaseConnectionProvider()
            await connection.initialize()
            this.firebaseDb = connection.getDb()
        }
    }

    public static getDb(): Database {
        if (this.firebaseDb == null){
            throw new Error("Firebase is not initialized.")
        }
        return this.firebaseDb
    }
}