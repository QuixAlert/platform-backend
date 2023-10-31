import {Injectable} from "@nestjs/common";
import {child, Database, DatabaseReference, get, ref} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {ADOPTION_PATH, ANIMAL_PATH} from "../../utils/Consts";
import {mapAnimalData} from "../../animal/model/AnimalMapper";
import {mapAdoptionData} from "../model/AdoptionMapper";

@Injectable()
export class AdoptionRepositoryImpl implements IAdoptionRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async getAll(): Promise<Adoption[]> {
        return get(child(this.dbRef, ADOPTION_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values).map((adoptionData: any) => {
                        if(typeof adoptionData === 'object') {
                            return mapAdoptionData(Object.values(adoptionData)[0])
                        }
                        else return mapAdoptionData(adoptionData)
                    });
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async getByAdoptionId(adoptionId: String): Promise<Adoption> {
        try {
            const snapshot = await get(child(this.dbRef, ADOPTION_PATH));

            if (snapshot.exists()) {
                const adoptions = snapshot.val();
                const adoption = Object.entries(adoptions).find(([key, value]) => Object.keys(value)[0] === adoptionId);

                if (adoption) {
                    return mapAdoptionData(Object.values(adoption[1])[0]);
                }
            }
        } catch (err) {
            throw err;
        }
        return null;
    }

    async getByUserId(userId: String): Promise<Adoption> {
        try {
            const snapshot = await get(child(this.dbRef, ADOPTION_PATH));

            if (snapshot.exists()) {
                const adoptions = snapshot.val();
                const adoption = Object.entries(adoptions).find(([key, value]) => key === userId);

                if (adoption) {
                    return mapAdoptionData(Object.values(adoption[1])[0]);
                }
            }
        } catch (err) {
            throw err;
        }
        return null;
    }

}