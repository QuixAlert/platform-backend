import {HttpStatus} from "@nestjs/common";

export interface Response {
    message: String | null,
    success: boolean
}