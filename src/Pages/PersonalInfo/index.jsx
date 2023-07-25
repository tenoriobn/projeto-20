import React from 'react';
import styles from './PersonalInfo.module.scss'
import InputForm from 'Components/inputForm';
import Heading from 'Components/Heading';

export default function PersonalInfo() {
    return (
        <div className={styles.container__personalInfo}>
            <Heading
                title="Personal Info"
                paragraph="Please provide your name, email address, and phone number."
            />

            <form action="" className={styles.form}>
                <InputForm 
                    required={true}
                    label="Name"
                    placeholder="e.g. Stephen King"
                />

                <InputForm 
                    required={true}
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                />

                <InputForm 
                    required={true}
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                />
            </form>
        </div>
    )
}
