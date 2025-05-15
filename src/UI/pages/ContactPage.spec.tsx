import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ContactPage from './ContactPage';


vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));

describe('ContactPage', () => {
    it('renderiza el formulario y el botón está deshabilitado si los campos están vacíos', () => {
        render(<ContactPage />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/Register/i)).toBeDisabled();
    });

    it('habilita el botón cuando todos los campos están completos y muestra mensaje al enviar', () => {
        render(<ContactPage/>);
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Juan' } });
        fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '2000-01-01' } });
        fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Madrid' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'juan@mail.com' } });
        fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '12345678' } });

        const submitBtn = screen.getByDisplayValue(/Register/i);
        expect(submitBtn).toBeEnabled();

        fireEvent.click(submitBtn);

        expect(screen.getByText(/Thank you for signing up!/i)).toBeInTheDocument();
    });
});