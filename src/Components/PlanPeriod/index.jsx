import React from 'react';
import styles from './PlanPeriod.module.scss'


export default function PlanPeriod() {
    return (
        <div className={styles.plan__period}>
            <label htmlFor="" className={`${styles.period} ${styles.select}`}>Monthly</label>
            <label className={styles.period__select}>
                <input type="checkbox" className={styles.checkbox} />
            </label>
            <label htmlFor="" className={styles.period}>Yearly</label>
        </div>
    )
}
