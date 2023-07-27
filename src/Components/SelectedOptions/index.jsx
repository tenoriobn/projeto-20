import React from 'react'
import styles from './SelectedOptions.module.scss'
import SelectedOptionsInfo from './SelectedOptionInfo'

export default function SelectedOptions() {
    return (
        <div className={styles.finishingup__selectedoptions}>
            <h3 className={styles.selectedplan}>Arcade (Monthly)</h3>

            <SelectedOptionsInfo 
                styles={styles} 
                infoPlan="Change"
                valuePlan="$9/mo"
            />

            <div className={styles.line}></div>

            <SelectedOptionsInfo 
                styles={styles} 
                infoPlan="Online service"
                valuePlan="+$1/mo"
            />
            
            <SelectedOptionsInfo 
                styles={styles} 
                infoPlan="Larger storage"
                valuePlan="+$2/mo"
            />

            <SelectedOptionsInfo 
                styles={styles} 
                infoPlan="Total (per month)"
                valuePlan="+$12/mo"
            />

        </div>
    )
}
