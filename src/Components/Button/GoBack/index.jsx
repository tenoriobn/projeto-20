import { useNavigation } from 'common/context/NavigationContext';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GoBack( {styles} ) {
    const { currentPageIndex, pages, goToPreviousPage } = useNavigation();

    const previousPageIndex = currentPageIndex - 1;

    return (
        <Link 
            to={pages[previousPageIndex]}
            className={styles.goback}
            onClick={() => {goToPreviousPage(previousPageIndex)}}
        >
            Go Back
        </Link>
    )
}
