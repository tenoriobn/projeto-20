import React from 'react';
import styles from './CardPlan.module.scss'

export default function CardPlan( {img, planName, planValue} ) {
    return (
        <article className={styles.plan__card}>
            <img src={img} alt="Arcade flat icon" className={styles.plan__card__img} />

            <div className={styles.container__card}>
                <h4 className={styles.plan__name}>{planName}</h4>
                <h5 className={styles.plan__value}>{planValue}</h5>
            </div>
        </article>
    )
}
