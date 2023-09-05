import { useAddonsContext } from 'common/context/AddonsContext';
import styles from './CardAddons.module.scss';
import addons from './add-ons.json'
import { usePlanContext } from 'common/context/PlanContext';
import { useEffect } from 'react';

export default function CardAddons() {
    const { selectedAddons, setSelectedAddons } = useAddonsContext();
    const { isYearly } = usePlanContext();

    const handleAddonToggle = (addonId) => {
        const selectedAddon = addons.find(addon => addon.id === addonId);
        
        const updatedValue = isYearly ? selectedAddon.value * 10 : selectedAddon.value;
        
        if (selectedAddons.some(addon => addon.id === addonId)) {
            setSelectedAddons(prevSelected => prevSelected.filter(addon => addon.id !== addonId));
        } else {
            setSelectedAddons(prevSelected => {
                const updatedSelected = [...prevSelected, { ...selectedAddon, value: updatedValue }];
                return updatedSelected.sort((a, b) => a.id - b.id);
            });
        }
    };

    useEffect(() => {
        if (selectedAddons.length > 0) {
            // Mapeie a lista de addons selecionados e atualize seus valores com base em isYearly
            const updatedAddons = selectedAddons.map(addon => {
                const originalAddon = addons.find(item => item.id === addon.id);
    
                return {
                    ...addon,
                    value: !isYearly ? originalAddon.value : originalAddon.value * 10
                };
            });
    
            console.log(updatedAddons)
            setSelectedAddons(updatedAddons);
        }
        // eslint-disable-next-line
    }, [isYearly]);

    return (
        <div className={styles.addons__card__container}>
            {addons.map((addon) => (
                <label 
                    key={addon.id} 
                    className={`
                        ${styles.addons} 
                        ${selectedAddons.some(selected => selected.id === addon.id) ? styles.addons_active : ''}
                    `}
                >
                    <div className={styles.addons__container}>
                        <input 
                            type="checkbox" 
                            className={styles.addons__checkbox} 
                            checked={selectedAddons.some(selected => selected.id === addon.id)}
                            onChange={() => handleAddonToggle(addon.id)}
                        />

                        <div className={styles.addons__text__container}>
                            <h5 className={styles.addons__name}>{addon.name}</h5>
                            <h6 className={styles.addons__description}>{addon.description}</h6>
                        </div>
                    </div>

                    <h5 className={styles.addons__value}>
                        +${isYearly ? `${addon.value * 10}/yr` : `${addon.value}/mo`}
                    </h5>
                </label>
            ))}
        </div>
    )
}


/*
    Fazer com que o `value` do state seja atualizado automaticamente
    sem a necessidade de ter que clicar no input para atualizar valor mensal para anual.
*/