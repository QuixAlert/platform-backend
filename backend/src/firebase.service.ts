import {Injectable} from "@nestjs/common";
import {FirebaseClient} from "./database/FirebaseClient";
import {child, get, ref} from "@firebase/database";
import {FirebaseConnection} from "./database/FirebaseConnection";

@Injectable()
export class FirebaseService {
    private database = FirebaseClient
    getUsers(){
        this.database.getInstance().then((database) => {
            let dbRef = ref(database)
            get(child(dbRef, 'usuarios/'))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                    }
                })
                .catch((error) => console.log(error))
        })
    }
}