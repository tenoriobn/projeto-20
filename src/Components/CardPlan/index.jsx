import React, { useState } from 'react';
import styles from './CardPlan.module.scss';
import plans from './plans.json';
import Icons from './Icons';

export default function CardPlan({ isYearly }) {
    const [activePlan, setActivePlan] = useState();

    const formatPlanValue = (value, isYearly) => {
        return isYearly ? `${value * 10}/yr` : `${value}/mo`;
    }

    const selectedPlan = (plan) => {
        setActivePlan(plan.id);

        console.log(formatPlanValue(plan.planValue, isYearly));
    }

    return (
        <div className={styles.plan__card__container}>
            {plans.map((plan) => (
                <article 
                    key={plan.id} 
                    className={`${styles.plan__card} ${activePlan === plan.id ? styles.plan_active : ''}`}
                    onClick={() => selectedPlan(plan)}
                >
                    
                    <img src={Icons[plan.img]} alt={`${plan.planName} flat icon`} className={styles.plan__card__img} />

                    <div className={styles.container__card}>
                        <h4 className={styles.plan__name}>{plan.planName}</h4>
                        <h5 className={styles.plan__value}>$
                            {formatPlanValue(plan.planValue, isYearly)}
                        </h5>

                        {isYearly ? <p className={styles.plan__discount}>2 months free</p> : ''}
                    </div>
                </article>
            ))}
        </div>
    );
}