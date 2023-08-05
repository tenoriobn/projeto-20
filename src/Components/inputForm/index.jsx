import React from 'react';
import styles from './InputForm.module.scss';
import inputs from './form.json'

export default function InputForm() {
    return (
        <form action="" className={styles.form}>
            {inputs.map((input) => (
                <div key={input.id} className={styles.container__input}>
                    <label className={styles.label}>{input.label}</label>
                    <input placeholder={input.placeholder} required={input.required} type="text" className={styles.input} />
                </div>
            ))}
        </form>
    )
}
