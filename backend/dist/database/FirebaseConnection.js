"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseConnection = void 0;
const database_1 = require("@firebase/database");
const app_1 = require("@firebase/app");
const auth_1 = require("@firebase/auth");
const FirebaseConfig_1 = require("./FirebaseConfig");
class FirebaseConnection {
    constructor() {
        this.fireBaseApp = null;
        this.firebaseConfig = FirebaseConfig_1.dbConfig;
        this.firebaseUserConfig = FirebaseConfig_1.userConfig;
    }
    async getDb() {
        this.fireBaseApp = (0, app_1.initializeApp)(this.firebaseConfig);
        this.firebaseAuth = (0, auth_1.getAuth)(this.fireBaseApp);
        const { userName, userPassword } = this.firebaseUserConfig;
        await this.doAuth(this.firebaseAuth, userName, userPassword)
            .then(r => this.firebaseDb = (0, database_1.getDatabase)(this.fireBaseApp))
            .catch(() => console.log("User auth failed"));
        return this.firebaseDb;
    }
    async doAuth(auth, email, password) {
        (0, auth_1.signInWithEmailAndPassword)(auth, email, password)
            .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
}
exports.FirebaseConnection = FirebaseConnection;
//# sourceMappingURL=FirebaseConnection.js.map