import React from 'react';
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
