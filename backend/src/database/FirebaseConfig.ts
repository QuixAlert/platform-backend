import 'dotenv/config'
require('dotenv').config()

export const dbConfig = {
    apiKey : process.env.FIREBASE_APIKEY,
    authDomain : process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL : process.env.FIREBASE_DATABASE_URL,
    projectId : process.env.FIREBASE_PROJECT_ID,
    storageBucket : process.env.FIREBASE_BUCKET,
    messagingSenderId : process.env.FIREBASE_SENDER_ID,
    appId : process.env.FIREBASE_APP_ID,
    measurementId : process.env.FIREBASE_MEASUREMENT_ID
}

export const userConfig = {
    userName : process.env.FIREBASE_USER_NAME,
    userPassword : process.env.FIREBASE_USER_PASSWORD,
}