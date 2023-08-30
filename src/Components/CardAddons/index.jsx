import { useAddonsContext } from 'common/context/AddonsContext';
import styles from './CardAddons.module.scss';
import addons from './add-ons.json'

export default function CardAddons() {
    const { selectedAddons, setSelectedAddons } = useAddonsContext();

    const handleAddonToggle = (addonId) => {
        if (selectedAddons.some(addon => addon.id === addonId)) {
            setSelectedAddons(prevSelected => prevSelected.filter(addon => addon.id !== addonId));
        } else {
            const selectedAddon = addons.find(addon => addon.id === addonId);
            setSelectedAddons(prevSelected => [...prevSelected, selectedAddon]);
        }
    };

    return (
        <div className={styles.addons__card__container}>
            {addons.map((addon) => (
                <label 
                    key={addon.id} 
                    // className={styles.addons}
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

                    <h5 className={styles.addons__value}>{addon.value}</h5>
                </label>
            ))}
        </div>
    )
}


/*
1- Ao dar `checked` no input pegar o `Name, description e value` e armazenar no state unchecked remove do state
    - Criar um context para guardar os checked realizado sem perder ao ir para outro step
    - Criar o state no context para que o state guarde os dados
    - Criar condição para adicionar o item e se o item já estiver adicionado remove-lo.

*/