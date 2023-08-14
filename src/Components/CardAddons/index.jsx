import React, { useState } from 'react';
import styles from './CardAddons.module.scss';
import addons from './add-ons.json'

export default function CardAddons() {
    const [selectedAddons, setSelectedAddons] = useState([1, 2]);

    const checkboxSelection = (addonId) => {
        if (selectedAddons.includes(addonId)) {
            setSelectedAddons(selectedAddons.filter(id => id !== addonId));
        } else {
            setSelectedAddons([...selectedAddons, addonId]);
        }
    }

    return (
        <div className={styles.addons__card__container}>
            {addons.map((addon) => (
                <article 
                    key={addon.id} 
                    className={`${styles.addons} ${selectedAddons.includes(addon.id) ? styles.addons_active : ''}`}
                    onClick={() => checkboxSelection(addon.id)}
                >
                    <div className={styles.addons__container}>
                        <input 
                            type="checkbox" 
                            className={styles.addons__checkbox} 
                            checked={selectedAddons.includes(addon.id)}
                            onChange={() => checkboxSelection(addon.id)}
                        />

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
