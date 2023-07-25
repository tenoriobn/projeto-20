import React from 'react'
import styles from './Heading.module.scss'

export default function Heading( {title, paragraph} ) {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.paragraph}>{paragraph}</h3>
        </>
    )
}
