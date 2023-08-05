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

            <CardAddons />
        </section>
    )
}
