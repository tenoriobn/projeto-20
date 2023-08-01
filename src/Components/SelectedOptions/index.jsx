import React from 'react'
import styles from './SelectedOptions.module.scss'

export default function SelectedOptions() {
    return (
        <>
            <div className={styles.finishingup}>
                <div className={styles.finishingup__container}>
                    <div className={styles.selected__container}>
                        <h3 className={styles.plan}>Arcade (Monthly)</h3>
                        <h4 className={styles.change}>
                            Change
                        </h4>
                    </div>

                    <h5 className={styles.plan__value}>
                        $9/mo
                    </h5>
                </div>

                <div className={styles.line}></div>

                <div className={styles.finishingup__container}>
                    <h4 className={styles.plan__info}>
                        Online service
                    </h4>
                    <h5 className={styles.addons__value}>
                        +$1/mo
                    </h5>
                </div>

                <div className={styles.finishingup__container}>
                    <h4 className={styles.plan__info}>
                        Larger storage
                    </h4>
                    <h5 className={styles.addons__value}>
                        +$2/mo
                    </h5>
                </div>
            </div>

            <div className={styles.total__container}>
                <h4 className={styles.plan__info}>
                    Total (per month)
                </h4>
                <h5 className={styles.addons__value}>
                    +$12/mo
                </h5>
            </div>
        </>
    )
}
