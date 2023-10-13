import { Module } from "@nestjs/common";
import { FirebaseServiceProvider } from "./FirebaseServiceProvider";

@Module({
    providers: [FirebaseServiceProvider],
    exports: [FirebaseServiceProvider],
})
export class FirebaseModule {}