import React, { useEffect } from 'react';
import styles from './CardPlan.module.scss';
import plans from './plans.json';
import Icons from './Icons';
import { usePlanContext } from 'common/context/PlanContext';

export default function CardPlan({ isYearly }) {
    const { activePlan, setActivePlan } = usePlanContext();

    const formatPlanValue = (value, isYearly) => {
        return isYearly ? `${value * 10}/yr` : `${value}/mo`;
    }

    const selectedPlan = (plan) => {
        setActivePlan(plan);

        console.log(activePlan)
    }

    // Aqui inicia somente com o `id` pois estou fazendo `plans[0].id`.
    // Enquanto em cima mostra outras propriedades, pois estou enviando `setActivePlan(plan)` o `plan` inteiro
    // Então o desafio é uma forma de definir o primeiro card como plano selecionado inicial, mas acessar outras
        // propriedades que não seja somente o id.
    useEffect(() => {
        if (!activePlan && plans.length > 0) {
            setActivePlan(plans[0].id);
        }
        // eslint-disable-next-line
    }, [activePlan, plans]);

    return (
        <div className={styles.plan__card__container}>
            {plans.map((plan) => (
                <article 
                    key={plan.id} 
                    className={`${styles.plan__card} ${activePlan === plan ? styles.plan_active : ''}`}
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

/*

Após arrumar o problema com o plano padrão inicial, obtendo as propriedades:
1- Fazer com que o valor do periodo escolhido seja armazenado no state do context.
2- Fazer com que o periodo continue selecionado após ir para outros steps e voltar (aqui é context)

*/