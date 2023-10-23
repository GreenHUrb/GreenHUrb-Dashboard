import { useState } from 'react'

export const usePasswordType = () => {
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    return {
        passwordType, togglePassword
    }
}

