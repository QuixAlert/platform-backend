import { Injectable } from "@nestjs/common";
import {FirebaseServiceProvider} from "../../firebase/FirebaseServiceProvider";
import {child, DataSnapshot, get, ref} from "@firebase/database";
import {mapUserData} from "../functions";

@Injectable()
export class UserRepository implements IUserRepository {
    private database;
    private dbRef;

    constructor() {
        this.database = FirebaseServiceProvider.getDbInstance()
        this.dbRef = ref(this.database)
    }

    getAll(): Promise<User[]> {
        return get(child(this.dbRef, "usuarios"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    const users: User[] = Object.values(values).map((userData: any) => mapUserData(userData));
                    return users;
                } else {
                    return [];
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    getById(): void {
        // Use this.database to interact with the Firebase database
    }
}
