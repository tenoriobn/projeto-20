import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();
FormContext.displayName = "Form";

export function FormProvider({ children }) {
    const [formData, setFormData] = useState({});

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const { formData, setFormData } = useContext(FormContext);

    return {
        formData,
        setFormData,
    };
}
