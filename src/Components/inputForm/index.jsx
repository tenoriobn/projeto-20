import React from 'react';
import styles from './InputForm.module.scss';

export default function InputForm( {label, placeholder, required} ) {
    return (
        <div className={styles.container__input}>
            <label className={styles.label}>{label}</label>
            <input placeholder={placeholder} required={required} type="text" className={styles.input} />
        </div>
    )
}
