"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseClient = void 0;
const FirebaseConnection_1 = require("./FirebaseConnection");
class FirebaseClient {
    constructor() { }
    static async getInstance() {
        if (this.firebaseDb == null) {
            this.firebaseDb = await new FirebaseConnection_1.FirebaseConnection().getDb();
        }
        return this.firebaseDb;
    }
}
exports.FirebaseClient = FirebaseClient;
FirebaseClient.firebaseDb = null;
//# sourceMappingURL=FirebaseClient.js.map