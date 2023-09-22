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