
export interface AuthRepository {
    loginUser(email: string, password: string): boolean;
}
