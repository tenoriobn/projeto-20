import React from 'react'
import styles from './SelectedOptions.module.scss'
import { usePlanContext } from 'common/context/PlanContext';
import { useNavigate } from 'react-router-dom';
import { useAddonsContext } from 'common/context/AddonsContext';
import { useNavigation } from 'common/context/NavigationContext';

export default function SelectedOptions() {
    const { activePlan, isYearly } = usePlanContext();
    const { selectedAddons } = useAddonsContext();
    const selectedPeriod = isYearly ? '(Yearly)' : '(Monthly)';
    const totalPeriod = isYearly ? 'year' : 'month';
    const periodCurrency = isYearly ? '/yr' : '/mo';

    const navigate = useNavigate();
    const { goToStep } = useNavigation(); // Use o goToStep do contexto de navegação

    const changePlan = () => {
        // Navegue para a página desejada
        navigate('/selectplan');
        // Atualize o currentPageIndex usando o goToStep
        goToStep(1); // Aqui você precisa fornecer o índice correto do step para o qual você está navegando
    };

    const totalAddonsValue = selectedAddons.reduce((accumulator, addon) => {
        const addonValue = parseFloat(addon.value);

        return accumulator + addonValue;
    }, 0);

    const totalValue = totalAddonsValue + parseFloat(activePlan.planValue);

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
                <h5 className={styles.addons__value}>{isYearly ? '' : '+'}${totalValue}{periodCurrency}</h5>
            </article>
        </>
    )
}