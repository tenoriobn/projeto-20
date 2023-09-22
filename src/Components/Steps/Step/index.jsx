import { useNavigation } from 'common/context/NavigationContext';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Step( {children, to, styles} ) {
    const { pages, currentStep, goToStep } = useNavigation();
    const stepIndex = pages.indexOf(to);

    const isClickable = stepIndex <= currentStep;

    return (
        <NavLink 
            className={
                ({isActive}) => `
                    ${styles.navlink} 
                    ${isActive ? styles.active : ""}
                `
            } 
            to={to}
            onClick={(e) => {
                if (!isClickable) {
                    e.preventDefault();
                } else {
                    goToStep(stepIndex);
                }
            }}
        >
            {children}
        </NavLink>
    )
}
