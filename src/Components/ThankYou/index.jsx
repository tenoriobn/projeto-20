import React from 'react';
import styles from './ThankYou.module.scss';
import Heading from 'Components/Heading';
import iconThankYou from './icon-thank-you.svg';

export default function ThankYou() {
    return (
        <section className={styles.thanksyou__container}>
            <img src={iconThankYou} alt="thank you icon" className={styles.icon} />

            <Heading 
                thankyouparagraph="thankyou__paragraph"
                title="Thank you!"
                paragraph="Thanks for confirming your subscription! We hope you have fun 
                            using our platform. If you ever need support, please feel free 
                            to email us at support@loremgaming.com."
            />
        </section>
    )
}
