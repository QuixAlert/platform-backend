import {Database, getDatabase} from "@firebase/database";
import {FirebaseApp, initializeApp} from "@firebase/app";
import {Auth, getAuth, signInWithEmailAndPassword, UserCredential} from "@firebase/auth";
import {dbConfig, userConfig} from "../utils/firebaseConfig";

export class FirebaseConnectionProvider {
    private fireBaseApp : FirebaseApp = null
    private firebaseDb : Database
    private firebaseAuth : Auth
    private firebaseConfig = dbConfig
    private firebaseUserConfig = userConfig


    public async initialize(): Promise<void> {
        this.fireBaseApp = initializeApp(this.firebaseConfig)
        this.firebaseAuth = getAuth(this.fireBaseApp)
        const {userName, userPassword} = this.firebaseUserConfig
        await this.doAuth(this.firebaseAuth, userName, userPassword)
        this.firebaseDb = getDatabase(this.fireBaseApp)
    }

    private async doAuth(auth: Auth, email: string, password: string){
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log("User auth failed: ", error)
        }
    }

    public getDb(): Database {
        if (this.fireBaseApp == null) {
            throw new Error("Firebase is not initialized.")
        }
        return this.firebaseDb
    }
}