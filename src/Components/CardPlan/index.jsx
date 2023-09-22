import React, { useEffect } from 'react';
import styles from './CardPlan.module.scss';
import plans from './plans.json';
import Icons from './Icons';
import { usePlanContext } from 'common/context/PlanContext';

export default function CardPlan() {
    const { activePlan, setActivePlan, isYearly } = usePlanContext();

    const selectedPlan = (plan) => {
        const updatedPlan = { ...plan };

        if (isYearly) {
            updatedPlan.planValue = plan.planValue * 10; 
        }

        setActivePlan(updatedPlan);
    }

    useEffect(() => {
        if (activePlan) {
            const originalPlan = plans.find(item => item.id === activePlan.id);

            const updatedPlan = {
                ...activePlan,
                planValue: !isYearly ? originalPlan.planValue : originalPlan.planValue * 10
            };

            setActivePlan(updatedPlan);
        }
        // eslint-disable-next-line
    }, [isYearly]);

    useEffect(() => {
        if (!activePlan && plans.length > 0) {
            setActivePlan(plans[0]);
        }
        // eslint-disable-next-line
    }, [activePlan]);

    return (
        <div className={styles.plan__card__container}>
            {plans.map((plan) => {
                const isActivePlan = activePlan && activePlan.id === plan.id;

                return (
                    <article 
                        key={plan.id} 
                        className={`${styles.plan__card} ${isActivePlan ? styles.plan_active : ''}`}
                        onClick={() => selectedPlan(plan)}
                    >
                        
                        <img src={Icons[plan.img]} alt={`${plan.planName} flat icon`} className={styles.plan__card__img} />

                        <div className={styles.container__card}>
                            <h4 className={styles.plan__name}>{plan.planName}</h4>
                            <h5 className={styles.plan__value}>
                                {!isYearly ? `$${plan.planValue}/mo` : `$${plan.planValue * 10}/yr`}
                            </h5>
                            {isYearly ? <p className={styles.plan__discount}>2 months free</p> : ''}
                        </div>
                    </article>
                )
            })}
        </div>
    );
}