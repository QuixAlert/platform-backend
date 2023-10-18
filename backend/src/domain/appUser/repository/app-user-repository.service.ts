import {Injectable} from "@nestjs/common";
import {Database, DatabaseReference, child, get, ref} from "@firebase/database";
import {mapUserData} from "../Mappers";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {USER_PATH} from "../../utils/Consts";

@Injectable()
export class AppUserRepository implements IAppUserRepository {
    private readonly database: Database;
    private dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async getAll(): Promise<AppUser[]> {
        return get(child(this.dbRef, USER_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values).map((userData: any) => mapUserData(userData));
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async getById(userId: String): Promise<AppUser> {
        return get(child(this.dbRef, USER_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const keys = Object.keys(snapshot.val());

                    const entries = Object.entries(snapshot.val()).filter((user) => user[0] == userId)
                    const values = entries.flat()
                    return mapUserData(values[1])
                }
            }).catch((err) => {
                throw err;
            });
    }
}
