import { useNavigation } from 'common/context/NavigationContext'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NextStep( {styles, nextstep, children} ) {
    const { currentPageIndex, pages, goToStep } = useNavigation();

    const nextPageIndex = currentPageIndex + 1;

    return (
        <Link
            to={pages[nextPageIndex]}
            className={`${styles.button} ${styles[nextstep]}`}
            onClick={() => {goToStep(nextPageIndex)}}
        >
            {currentPageIndex === 3 ? "Confirm" : "Next Step"}
        </Link>
    )
}
