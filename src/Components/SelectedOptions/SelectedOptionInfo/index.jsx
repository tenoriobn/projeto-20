import React from 'react'

export default function SelectedOptionsInfo( {styles, infoPlan, valuePlan} ) {
    return (
        <>
            <h4 className={`${styles.selectedplan__info}
                ${infoPlan === "Change" ? styles.selectedplan__info_alt : ""}
            `}>
                {infoPlan}
            </h4>
            <h5 className={`${styles.selectedplan__value} 
                ${infoPlan === "Change" ? 
                styles.selectedplan__value_alt : 
                infoPlan === "Total (per month)" ? 
                styles.selectedplan__total : 
                ""}`
            }>
                {valuePlan}
            </h5>
        </>
    )
}
