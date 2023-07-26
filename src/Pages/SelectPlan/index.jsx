import React from 'react';
import styles from './SelectPlan.module.scss';
import Heading from 'Components/Heading';
import CardPlan from 'Components/CardPlan';
import arcade from './icon-arcade.svg';
import advanced from './icon-advanced.svg';
import pro from './icon-pro.svg';
import PlanPeriod from 'Components/PlanPeriod';

export default function SelectPlan() {
    return (
        <section className="">
            <Heading 
                title="Select your plan"
                paragraph="You have the option of monthly or yearly billing."
            />

            <div className={styles.plan__card__container}>
                <CardPlan
                    img={arcade}
                    planName="Arcade"
                    planValue="$9/mo"
                />

                <CardPlan
                    img={advanced}
                    planName="Advanced"
                    planValue="$12/mo"
                />

                <CardPlan
                    img={pro}
                    planName="Pro"
                    planValue="$15/mo"
                />
            </div>

            <PlanPeriod />
            
        </section>
    )
}
