import React from 'react';
import styles from './PlanPeriod.module.scss'
import { usePlanContext } from 'common/context/PlanContext';

export default function PlanPeriod() {
    const { isYearly, setIsYearly } = usePlanContext();

    return (
        <div className={styles.plan__period}>
            <h4 className={`${styles.period} ${!isYearly ? styles.select : ''}`} onClick={() => setIsYearly(false)}>Monthly</h4>

            <label className={styles.period__select}>
                <input 
                    type="checkbox" 
                    className={styles.checkbox} 
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                />
            </label>
            
            <h4 className={`${styles.period} ${isYearly ? styles.select : ''}`} onClick={() => setIsYearly(true)}>Yearly</h4>
        </div>
    )
}