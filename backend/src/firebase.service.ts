import {Injectable} from "@nestjs/common";
import {FirebaseClientProvider} from "./database/firebaseClient.provider";
import {child, DataSnapshot, get, ref} from "@firebase/database";
import {FirebaseConnectionProvider} from "./database/firebaseConnection.provider";
import {getAuth} from "@firebase/auth";

@Injectable()
export class FirebaseService {
    constructor() {
        FirebaseClientProvider.initialize()
            .then(() => console.log("Database initialized successfully"))
            .catch(() => console.log("Database wasn't initialized successfully"))
    }
    getUsers() {
        const database = FirebaseClientProvider.getDb()
        const dbRef = ref(database, "usuarios")
        get(child(dbRef, "/"))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    console.log(snapshot.val())
                }
            })
            .catch((error) => console.log(error))
    }
}