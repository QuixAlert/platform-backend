import {Injectable} from "@nestjs/common";
import {child, Database, DatabaseReference, get, ref} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {ANIMAL_PATH} from "../../utils/Consts";
import {mapAnimalData} from "../model/AnimalMapper";

@Injectable()
export class AnimalRepositoryImpl implements IAnimalRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async getAll(): Promise<Animal[]> {
        return get(child(this.dbRef, ANIMAL_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values).map((animalData: any) => mapAnimalData(animalData));
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async getByAnimalId(animalId: String): Promise<Animal> {
        try {
            const snapshot = await get(child(this.dbRef, ANIMAL_PATH));

            if (snapshot.exists()) {
                const animals = snapshot.val();
                const animal = Object.entries(animals).find(([key, value]) => key === animalId);

                if (animal) {
                    return mapAnimalData(animal[1]);
                }
            }
        } catch (err) {
            throw err;
        }
        return null;
    }


    async getByUserId(userId: String): Promise<Animal> {
        try {
            const snapshot = await get(child(this.dbRef, ANIMAL_PATH));

            if (snapshot.exists()) {
                const animals = snapshot.val();
                const animal = Object.entries(animals).find(([key, value]) => value["idUsuario"] == userId);

                if (animal) {
                    return mapAnimalData(animal[1]);
                }
            }
        } catch (err) {
            throw err;
        }
        return null;
    }

}