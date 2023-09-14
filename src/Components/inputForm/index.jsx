import React from 'react';
import styles from './InputForm.module.scss';
import inputs from './form.json';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useFormContext } from 'common/context/FormContext';

const customMessage = "This field is required";

const validationInput = yup.object().shape({
    Name: 
        yup.string()
        .required(customMessage)
        .min(3, "Minimum 3 characters")
        .max(80, "Maximum 80 characters")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ^~,\s]+$/, "Enter only letters"),
    EmailAddress: 
        yup.string()
        .required(customMessage)
        .min(12, "Minimum 12 characters")
        .max(254, "Maximum 254 characters")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Enter a valid email address"),
    PhoneNumber: 
        yup.string()
        .required(customMessage)
        .min(10, "Minimum 10 characters")
        .max(16, "Maximum 16 characters")
        .matches(/^[\d+()\s-]*$/, "Enter a valid phone number"),
})

export default function InputForm() {
    const { formData, setFormData } = useFormContext();

    const {
        register,
        setValue,
        formState: { errors },
        trigger,
    } = useForm({
        resolver: yupResolver(validationInput),
        defaultValues: formData,
    });

    const updateFormData = async (fieldName, value) => {
        const isValid = await trigger(fieldName);

        if (isValid) {
            setValue(fieldName, value, { shouldValidate: true });
            setFormData((prevData) => ({
                ...prevData,
                [fieldName]: value,
            }));
        }

    };

    return (
        <form className={styles.form}>
            {inputs.map((input) => (
                <div key={input.id} className={styles.container__input}>
                    <div className={styles.container__label}>
                        <label className={styles.label}>{input.label}</label>
                        <p className={styles.error__message}>{errors[input.inputName]?.message}</p>
                    </div>
                    <input 
                        placeholder={input.placeholder} 
                        type="text" 
                        className={`${styles.input} ${errors[input.inputName] ? styles.input__error : ""}`}
                        name={input.inputName}
                        {...register(`[${input.inputName}]`)}
                        onBlur={(e) => updateFormData(input.inputName, e.target.value)} // Atualizamos o valor
                    />

                </div>
            ))}
            
        </form>
    )
}

/*

bibliotecas utilziadas: 
react hook form `form`
yup `validação`
errorMessage `mensagens`

*/