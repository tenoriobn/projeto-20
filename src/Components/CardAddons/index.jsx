import React from 'react';
import styles from './CardAddons.module.scss';
import addons from './add-ons.json'

export default function CardAddons() {
    return (
        <div className={styles.addons__card__container}>
            {addons.map((addon) => (
                <article key={addon.id} className={styles.addons}>
                    <div className={styles.addons__container}>
                        <input type="checkbox" className={styles.addons__checkbox} />

                        <div className={styles.addons__text__container}>
                            <h5 className={styles.addons__name}>{addon.name}</h5>
                            <h6 className={styles.addons__description}>{addon.description}</h6>
                        </div>
                    </div>

                    <h5 className={styles.addons__value}>{addon.value}</h5>
                </article>
            ))}
        </div>
    )
}
