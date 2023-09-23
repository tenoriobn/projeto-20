import React from 'react';
import styles from './Steps.module.scss';
import Step from './Step';
import steps from './steps.json'

export default function Steps() {
    return (
        <header className={styles.header}>
            <nav className={styles.steps}>
                <ul className={styles.list__steps}>
                    {steps.map((step) => (
                        <li key={step.id} className={styles.step__item}>
                            <Step to={step.to} styles={styles}>{step.id}</Step>

                            <div className={styles.step__section}>
                                <h4 className={styles.step__number}>{step.number}</h4>
                                <h3 className={styles.step__name}>{step.name}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}