"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConfig = exports.dbConfig = void 0;
require("dotenv/config");
require('dotenv').config();
exports.dbConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
exports.userConfig = {
    userName: process.env.FIREBASE_USER_NAME,
    userPassword: process.env.FIREBASE_USER_PASSWORD,
};
//# sourceMappingURL=FirebaseConfig.js.map