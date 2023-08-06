import React from 'react';
import styles from './PlanPeriod.module.scss'

export default function PlanPeriod({ isYearly, setIsYearly }) {
    return (
        <div className={styles.plan__period}>
            <h4 className={`${styles.period} ${isYearly ? '' : styles.select}`}>Monthly</h4>

            <label className={styles.period__select}>
                <input 
                    type="checkbox" 
                    className={styles.checkbox} 
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                />
            </label>
            
            <h4 className={`${styles.period} ${isYearly ? styles.select : ''}`}>Yearly</h4>
        </div>
    )
}