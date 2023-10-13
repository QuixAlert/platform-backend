import { Database } from "@firebase/database";
export declare class FirebaseConnection {
    private fireBaseApp;
    private firebaseDb;
    private firebaseAuth;
    private firebaseConfig;
    private firebaseUserConfig;
    getDb(): Promise<Database>;
    private doAuth;
}
