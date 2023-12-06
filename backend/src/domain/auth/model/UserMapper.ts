import {User} from "./User";

export function mapToUser(userData: any): User {
    return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role
    }
}