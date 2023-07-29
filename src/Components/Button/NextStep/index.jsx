import React from 'react'

export default function NextStep( {styles, nextstep, children} ) {
    return (
        <button className={`${styles.button} ${styles[nextstep]}`}>
            {children}
        </button>
    )
}
