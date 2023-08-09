import { useNavigation } from 'common/context/NavigationContext';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Step( {children, to, styles} ) {
    const { pages, goToStep } = useNavigation();
    const stepIndex = pages.indexOf(to);

    return (
        <NavLink 
            className={
                ({isActive}) => `
                    ${styles.navlink} 
                    ${isActive ? styles.active : ""}
                `
                
                // `${styles.navlink} ${currentPageIndex === stepIndex ? styles.active : ''}`
            } 
            to={to}
            onClick={() => {
                goToStep(stepIndex);
            }}
        >
            {children}
        </NavLink>
    )
}
