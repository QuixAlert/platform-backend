"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const FirebaseClient_1 = require("./database/FirebaseClient");
const database_1 = require("@firebase/database");
let FirebaseService = class FirebaseService {
    constructor() {
        this.database = FirebaseClient_1.FirebaseClient;
    }
    getUsers() {
        this.database.getInstance().then((database) => {
            let dbRef = (0, database_1.ref)(database);
            (0, database_1.get)((0, database_1.child)(dbRef, 'usuarios/'))
                .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                }
            })
                .catch((error) => console.log(error));
        });
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)()
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map