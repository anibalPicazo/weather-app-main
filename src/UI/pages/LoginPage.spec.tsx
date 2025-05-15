import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import LoginPage from './LoginPage';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: () => vi.fn(),
}));

describe('LoginPage', () => {
    it('renderiza el formulario y el botón está deshabilitado si los campos están vacíos', () => {
        render(<LoginPage />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeDisabled();
    });

    it('habilita el botón cuando todos los campos están completos', () => {
        render(<LoginPage />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'Juan@gmail.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123' } });

        const submitBtn = screen.getByRole('button', { name: /login/i });
        expect(submitBtn).toBeEnabled();
    });
});