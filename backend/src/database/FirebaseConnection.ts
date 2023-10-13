import {Database, getDatabase} from "@firebase/database";
import {FirebaseApp, initializeApp} from "@firebase/app";
import {Auth, getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import {dbConfig, userConfig} from "./FirebaseConfig";

export class FirebaseConnection {
    private fireBaseApp : FirebaseApp = null
    private firebaseDb : Database
    private firebaseAuth : Auth
    private firebaseConfig = dbConfig
    private firebaseUserConfig = userConfig

     public async getDb(): Promise<Database> {
        this.fireBaseApp = initializeApp(this.firebaseConfig)
        this.firebaseAuth = getAuth(this.fireBaseApp);
        const {userName, userPassword} = this.firebaseUserConfig
        await this.doAuth(this.firebaseAuth, userName, userPassword)
            .then(r => this.firebaseDb = getDatabase(this.fireBaseApp))
            .catch(() => console.log("User auth failed"))
        return this.firebaseDb;
    }

    private async doAuth(auth: Auth, email: string, password: string){
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
}