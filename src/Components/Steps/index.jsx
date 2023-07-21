import React from 'react';
import styles from './Steps.module.scss';
import Step from './Step';

export default function Steps() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <Step to="/" styles={styles}>
                    <span className={styles.header__nav__navlink__number}>1</span> 
                    <span className={styles.header__nav__navlink__text}>Your Info</span>
                </Step>
                
                <Step to="/selectplan" styles={styles}>
                    <span className={styles.header__nav__navlink__number}>2</span> 
                    <span className={styles.header__nav__navlink__text}>Select Plan</span>
                </Step>

                <Step to="/pickaddons" styles={styles}>
                    <span className={styles.header__nav__navlink__number}>3</span> 
                    <span className={styles.header__nav__navlink__text}>Add-Ons</span>
                </Step>
                
                <Step to="/finishingup" styles={styles}>
                    <span className={styles.header__nav__navlink__number}>4</span> 
                    <span className={styles.header__nav__navlink__text}>Summary</span>
                </Step>
            </nav>
        </header>
    )
}
