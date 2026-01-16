import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useOnboarding(onComplete) {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        nom: "",
        prenom: "",
        age: "",
        occupation: "",
        email: "",
        consentTerms: false,
        consentAge: false,
        consentEmail: false
    });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validateForm();
    }, [userData]);

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(userData.email);

        const filled =
            userData.nom.trim().length > 0 &&
            userData.prenom.trim().length > 0 &&
            userData.age.length > 0 &&
            userData.occupation.length > 0 &&
            isEmailValid &&
            userData.consentTerms &&
            userData.consentAge &&
            userData.consentEmail;

        setIsValid(filled);
    };

    const handleChange = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        if (isValid) {
            // Save to local storage
            const finalData = {
                ...userData,
                dateTest: new Date().toISOString()
            };
            localStorage.setItem('rivest_user', JSON.stringify(finalData));

            if (onComplete) onComplete(finalData);
            navigate('/instructions');
        }
    };

    return {
        userData,
        isValid,
        handleChange,
        handleSubmit
    };
}
