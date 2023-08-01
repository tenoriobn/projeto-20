import React from 'react';
import styles from './CardAddons.module.scss';

export default function CardAddons( {addOnsName, addOnsDescription, addOnsValue} ) {
    return (
        <article className={styles.addons}>
            <div className={styles.addons__container}>
                <input type="checkbox" className={styles.addons__checkbox} id="" />

                <div className={styles.addons__text__container}>
                    <h5 htmlFor="" className={styles.addons__name}>{addOnsName}</h5>
                    <h6 className={styles.addons__description}>{addOnsDescription}</h6>
                </div>
            </div>

            <h5 className={styles.addons__value}>{addOnsValue}</h5>
        </article>
    )
}
