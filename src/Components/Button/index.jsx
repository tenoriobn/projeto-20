import React from 'react';
import styles from './Button.module.scss';
import GoBack from 'Components/Button/GoBack';
import NextStep from './NextStep';

export default function Button( {children, nextstep} ) {
    return (
        <section className={styles.button__container}>
            <GoBack styles={styles} />

            <NextStep styles={styles} nextstep={nextstep} children={children} />

        </section>
    )
}
