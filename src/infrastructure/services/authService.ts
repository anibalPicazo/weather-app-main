import { AuthRepository } from "../../domain/repositories/authRepository";

export class AuthService implements AuthRepository {
    loginUser(email: string, password: string): Boolean {
        return (email && password) ? true : false;

    }

}
