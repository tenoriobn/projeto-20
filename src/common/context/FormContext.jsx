import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();
FormContext.displayName = "Form";

export function FormProvider({ children }) {
    const [formData, setFormData] = useState(null);
    const [showCustomMessage, setShowCustomMessage] = useState(false);

    return (
        <FormContext.Provider value={{ formData, setFormData, showCustomMessage, setShowCustomMessage }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const { formData, setFormData, showCustomMessage, setShowCustomMessage } = useContext(FormContext);

    return {
        formData,
        setFormData,
        showCustomMessage, 
        setShowCustomMessage,
    };
}
