import React from 'react'
import styles from './SelectedOptions.module.scss'
import { usePlanContext } from 'common/context/PlanContext';
import { useNavigate } from 'react-router-dom';
import { useAddonsContext } from 'common/context/AddonsContext';

export default function SelectedOptions() {
    const { activePlan, isYearly } = usePlanContext();
    const { selectedAddons } = useAddonsContext();
    const selectedPeriod = isYearly ? '(Yearly)' : '(Monthly)';
    const totalPeriod = isYearly ? 'year' : 'month';
    const periodCurrency = isYearly ? '/yr' : '/mo';

    const navigate = useNavigate();

    const changePlan = () => {
        navigate('/selectplan');
    };

    return (
        <>
            <div className={styles.finishingup}>
                <article className={styles.finishingup__container}>
                    <div className={styles.selected__container}>
                        <h3 className={styles.plan}>{activePlan.planName} {selectedPeriod}</h3>
                        <h4 
                            className={styles.change}
                            onClick={changePlan}
                        >
                            Change
                        </h4>
                    </div>

                    <h5 className={styles.plan__value}>${activePlan.planValue}{periodCurrency}</h5>
                </article>

                <span className={styles.line}></span>

                {selectedAddons.map((addon) => (
                    <article key={addon.id} className={styles.finishingup__container}>
                        <h4 className={styles.plan__info}>{addon.name}</h4>
                        <h5 className={styles.addons__value}>+${addon.value}{periodCurrency}</h5>


                    </article>
                ))}
            </div>

            <article className={styles.total__container}>
                <h4 className={styles.plan__info}>Total (per {totalPeriod})</h4>
                <h5 className={styles.addons__value}>+$12/mo</h5>
            </article>
        </>
    )
}


/*
    Realizar soma entre valor dos `Addons` adicionados e valor do plano escolhido

*/