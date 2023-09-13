import React from 'react';
import styles from './PersonalInfo.module.scss'
import InputForm from 'Components/inputForm';
import Heading from 'Components/Heading';

export default function PersonalInfo() {
    return (
        <section className={styles.container__personalInfo}>
            <Heading
                title="Personal Info"
                paragraph="Please provide your name, email address, and phone number."
            />

            <InputForm />
        </section>
    )
}

/*
    - Fazer com que o botão `Next Step` envie os dados preenchidos no formulário para o state `formData`

    - Corrigir bug do botão `Next Step` ao dar F5 em `step` posteriores ao 1
        ao dar f5, o botão `Go Back` some o `Next Step` quando acionado volta um `step`

    - Fazer com que ao dar F5, volte para o step inicial.
    
    - Fazer com que só seja possível avançar o `step` conforme preenchido
*/