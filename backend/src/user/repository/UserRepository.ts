import { Injectable } from "@nestjs/common";
import {FirebaseServiceProvider} from "../../firebase/FirebaseServiceProvider";
import {child, get, ref} from "@firebase/database";

@Injectable()
export class UserRepository implements IUserRepository {
    private database;
    private dbRef;

    constructor() {
        this.database = FirebaseServiceProvider.getDbInstance()
        this.dbRef = ref(this.database)
    }


    getAll(): void {
        get(child(this.dbRef, "usuarios"))
            .then((snapshot) => {
                if(snapshot.exists()){
                    console.log(snapshot.val())
                }
            })
            .catch((err) => console.log(err))
    }

    getById(): void {
        // Use this.database to interact with the Firebase database
    }
}
