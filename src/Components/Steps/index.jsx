import React from 'react';
import styles from './Steps.module.scss';
import Step from './Step';
import steps from './steps.json'

export default function Steps() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {steps.map((step) => (
                    <li key={step.id} className={styles.li}>
                        <Step to={step.to} styles={styles}>{step.id}</Step>

                        <div className={styles.step__section}>
                            <h4 className={styles.step__number}>{step.number}</h4>
                            <h3 className={styles.step__name}>{step.name}</h3>
                        </div>
                    </li>
                ))}
            </nav>
        </header>
    )
}


/*

            <nav className={styles.nav}>
                <li key={1} className={styles.li}>
                    <Step to="/" styles={styles}>1</Step>

                    <div className={styles.step__section}>
                        <h4 className={styles.step__number}>step 1</h4>
                        <h3 className={styles.step__name}>Your Info</h3>
                    </div>
                </li>

                <li className={styles.li}>
                    <Step to="/selectplan" styles={styles}>2</Step>

                    <div className={styles.step__section}>
                        <h4 className={styles.step__number}>step 2</h4>
                        <h3 className={styles.step__name}>Select Plan</h3>
                    </div>
                </li>

                <li className={styles.li}>
                    <Step to="/pickaddons" styles={styles}>3</Step>

                    <div className={styles.step__section}>
                        <h4 className={styles.step__number}>step 3</h4>
                        <h3 className={styles.step__name}>Add-Ons</h3>
                    </div>
                </li>

                <li className={styles.li}>
                    <Step to="/finishingup" styles={styles}>4</Step>

                    <div className={styles.step__section}>
                        <h4 className={styles.step__number}>step 4</h4>
                        <h3 className={styles.step__name}>Summary</h3>
                    </div>
                </li>
            </nav>

*/