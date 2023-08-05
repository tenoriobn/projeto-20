import React from 'react';
import styles from './CardPlan.module.scss';
import plans from './plans.json';
import Icons from './Icons';

export default function CardPlan() {
    return (
        <div className={styles.plan__card__container}>
            {plans.map((plan) => (
                <article key={plan.id} className={styles.plan__card}>
                    <img src={Icons[plan.img]} alt={`${plan.planName} flat icon`} className={styles.plan__card__img} />

                    <div className={styles.container__card}>
                        <h4 className={styles.plan__name}>{plan.planName}</h4>
                        <h5 className={styles.plan__value}>{plan.planValue}</h5>
                    </div>
                </article>
            ))}
        </div>
    );
}