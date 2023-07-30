import React from 'react'
import styles from './Heading.module.scss'

export default function Heading( {title, paragraph, thankyouparagraph} ) {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={`${styles.paragraph} ${styles[thankyouparagraph]}`}>{paragraph}</h3>
        </>
    )
}
