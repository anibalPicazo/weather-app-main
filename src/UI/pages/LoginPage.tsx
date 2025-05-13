import React, { useState } from "react";
import "../../index.css"; // Asegúrate de que Tailwind esté configurado correctamente

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {
            // Aquí puedes manejar el inicio de sesión
            console.log("Login successful");
        }
    };

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
        <img src="/app.png" alt="icon" className="w-32 h-32" />
      </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
                            isFormValid
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-600 cursor-not-allowed"
                        }`}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;