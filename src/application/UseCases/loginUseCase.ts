import { AuthService } from '../../infrastructure/services/authService';
;

const repository = new AuthService();

export const loginUseCase = (email: string, password: string): Boolean => {
    return repository.loginUser(email, password);
};
