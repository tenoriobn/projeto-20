import React from 'react';
import styles from './InputForm.module.scss';
import inputs from './form.json';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const customMessage = "This field is required";

const validationInput = yup.object().shape({
    Name: 
        yup.string()
        .required(customMessage)
        .min(3, "Minimum 3 characters")
        .max(80, "Maximum 80 characters")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ^~,\s]+$/, "Enter only letters, ^, ~, and ,"),
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
        .max(16, "Maximum 16 characters"),
})

export default function InputForm() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(validationInput)
    });
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {inputs.map((input) => (
                <div key={input.id} className={styles.container__input}>
                    <label className={styles.label}>{input.label}</label>
                    <input 
                        placeholder={input.placeholder} 
                        type="text" 
                        className={styles.input}
                        name={input.inputName}
                        {...register(`[${input.inputName}]`)}
                    />

                    <p className="error-message">{errors[input.inputName]?.message}</p>
                </div>
            ))}
            
            <input type="submit" />
        </form>
    )
}

/*

bibliotecas utilziadas: 
react hook form `form`
yup `validação`
errorMessage `mensagens`

*/