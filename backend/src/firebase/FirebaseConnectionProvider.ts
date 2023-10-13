import { Database, getDatabase } from "@firebase/database";
import { FirebaseApp, initializeApp } from "@firebase/app";
import { Auth, getAuth, signInWithEmailAndPassword, UserCredential } from "@firebase/auth";
import { dbConfig, userConfig } from "../utils/FirebaseConfiguration";

export class FirebaseConnectionProvider {
    private static fireBaseApp: FirebaseApp = null;
    private static firebaseDb: Database;
    private static firebaseAuth: Auth;
    private static firebaseConfig = dbConfig;
    private static firebaseUserConfig = userConfig;

    private constructor() {}

    public static async initialize(): Promise<void> {
        this.fireBaseApp = initializeApp(this.firebaseConfig);
        this.firebaseAuth = getAuth(this.fireBaseApp);
        const { userName, userPassword } = this.firebaseUserConfig;
        await this.doAuth(this.firebaseAuth, userName, userPassword);
        this.firebaseDb = getDatabase(this.fireBaseApp);
    }

    private static async doAuth(auth: Auth, email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log("User auth failed: ", error);
        }
    }

    public static getDb(): Database {
        if (FirebaseConnectionProvider.fireBaseApp == null) {
            throw new Error("Firebase is not initialized.");
        }
        return FirebaseConnectionProvider.firebaseDb;
    }
}
