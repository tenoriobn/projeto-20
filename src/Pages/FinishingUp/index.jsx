import React from 'react';
import styles from './FinishingUp.module.scss';
import Heading from 'Components/Heading';
import SelectedOptions from 'Components/SelectedOptions';
import ThankYou from 'Components/ThankYou';

export default function FinishingUp() {
    return (
        <section className={styles.finishingup__container}>
            {/* <Heading
                title="Finishing up"
                paragraph="Double-check everything looks OK before confirming."
            />

            <SelectedOptions /> */}

            <ThankYou />
        </section>
    )
}
