import React from 'react';
import styles from './Button.module.scss';

export default function Button( {children, nextstep} ) {
    return (
        <section className={styles.button__container}>
            <button className={`${styles.button} ${styles[nextstep]}`}>
                {children}
            </button>
        </section>
    )
}
