import React, { useState } from 'react';
import styles from './CardPlan.module.scss';
import plans from './plans.json';
import Icons from './Icons';

export default function CardPlan({ isYearly }) {
    const [activePlan, setActivePlan] = useState(null);

    const selectedPlan = (planId) => {
        setActivePlan(planId);
    }

    return (
        <div className={styles.plan__card__container}>
            {plans.map((plan) => (
                <article 
                    key={plan.id} 
                    className={`${styles.plan__card} ${activePlan === plan.id ? styles.card_active : ''}`}
                    onClick={() => selectedPlan(plan.id)}
                >
                    
                    <img src={Icons[plan.img]} alt={`${plan.planName} flat icon`} className={styles.plan__card__img} />

                    <div className={styles.container__card}>
                        <h4 className={styles.plan__name}>{plan.planName}</h4>
                        <h5 className={styles.plan__value}>$
                            {isYearly ? plan.planValue * 10 + '/yr' : plan.planValue + '/mo'}
                        </h5>

                        {isYearly ? <p className={styles.plan__discount}>2 months free</p> : ''}
                    </div>
                </article>
            ))}
        </div>
    );
}