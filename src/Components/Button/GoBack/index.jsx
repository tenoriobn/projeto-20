import { useNavigation } from 'common/context/NavigationContext';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GoBack( {styles} ) {
    const { currentPageIndex, pages, goToPreviousPage } = useNavigation();

    const previousPageIndex = currentPageIndex - 1;

    return (
        // <button className={styles.goback}>Go Back</button>

        <Link 
            to={pages[previousPageIndex]}
            className={`${styles.goback} ${currentPageIndex === 0 ? styles.goback_none : ''} `}
            onClick={() => {goToPreviousPage(previousPageIndex)}}
        >
            Go Back
        </Link>
    )
}
