import React from 'react';
import styles from './PickAddOns.module.scss';
import Heading from 'Components/Heading';
import CardAddons from 'Components/CardAddons';

export default function PickAddOns() {
    return (
        <section>
            <Heading
                title="Pick add-ons"
                paragraph="Add-ons help enhance your gaming experience."
            />

            <div className={styles.addons__card__container}>
                <CardAddons 
                    addOnsName={"Online service"} 
                    addOnsDescription={"Access to multiplayer games"}
                    addOnsValue={"+$1/mo"}
                />

                <CardAddons 
                    addOnsName={"Larger storage"} 
                    addOnsDescription={"Extra 1TB of cloud save"}
                    addOnsValue={"+$2/mo"}
                />

                <CardAddons 
                    addOnsName={"Customizable profile"} 
                    addOnsDescription={"Custom theme on your profile"}
                    addOnsValue={"+$2/mo"}
                />
            </div>
        </section>
    )
}
