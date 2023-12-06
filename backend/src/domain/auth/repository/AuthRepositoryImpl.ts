import {child, Database, DatabaseReference, get, ref, set} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {AUTH_PATH} from "../../utils/Consts";
import {mapToUser} from "../model/UserMapper";
import {User, UserRole} from "../model/User";
import {compare, hash} from "bcrypt";
import {stringify} from "ts-jest";
import {IAuthRepository} from "./IAuthRepository";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config"

export class AuthRepositoryImpl implements IAuthRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async login(loginDto: LoginDto): Promise<boolean> {
        return await this.checkIfUserPasswordMatches(loginDto)
    }

    async register(registerDto: RegisterDto): Promise<boolean> {
        let checkIfUserExists = await this.checkIfUserWithEmailExists(registerDto.email)
        if(!checkIfUserExists){
            const documentId = this.generateUniqueDocumentId(); // You should implement a function to generate a unique ID

            registerDto["decorators"] = UserRole.USER
            registerDto["id"] = documentId
            const protectedPassword = await this.hashPassword(registerDto.password)
            registerDto.password = protectedPassword

            await set(ref(this.database,  AUTH_PATH + '/' + documentId), registerDto);

            return true;
        }
        return false
    }

    private async checkIfUserWithEmailExists(userEmail: String){
        try {
            const snapshot = await get(child(this.dbRef, AUTH_PATH));

            if (snapshot.exists()) {
                const documentSnap = snapshot.val();

                const document = Object.values(documentSnap)
                    .map((userDataIn: any) => mapToUser(userDataIn))
                    .filter((user) => user.email == userEmail)

                return document.length > 0
            }
        } catch (err) {
            throw err;
        }
        return null;
    }

    private async checkIfUserPasswordMatches(loginDto: LoginDto){
        try {
            const snapshot = await get(child(this.dbRef, AUTH_PATH));

            if (snapshot.exists()) {
                const documentSnap = snapshot.val();

                const document = Object.values(documentSnap)
                    .map((userDataIn: any) => mapToUser(userDataIn))
                    .filter((user) =>
                        user.email == loginDto.email &&
                        compare(stringify(user.password), stringify(loginDto.password))
                    )

                return document.length > 0
            }
        } catch (err) {
            throw err;
        }
        return null;
    }

    private generateUniqueDocumentId(): string {
        return new Date().getTime().toString();
    }

    private async hashPassword(password: String): Promise<string> {
        return await hash(stringify(password), 10);
    }

    async getUserByEmail(email: String): Promise<User> {
        try {
            const snapshot = await get(child(this.dbRef, AUTH_PATH));

            if (snapshot.exists()) {
                const documentSnap = snapshot.val();

                const document = Object.values(documentSnap)
                    .map((userDataIn: any) => mapToUser(userDataIn))
                    .filter((user) => user.email == email)

                return document[0]
            }
        } catch (err) {
            throw err;
        }
    }
}