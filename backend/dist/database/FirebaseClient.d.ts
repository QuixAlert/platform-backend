import { Database } from "@firebase/database";
export declare class FirebaseClient {
    private static firebaseDb;
    private constructor();
    static getInstance(): Promise<Database>;
}
