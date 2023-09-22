import { useNavigation } from 'common/context/NavigationContext';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

export default function Step( {children, to, styles} ) {
    const { pages, currentPageIndex, goToStep } = useNavigation();
    const stepIndex = pages.indexOf(to);
    const [visitedSteps, setVisitedSteps] = useState([]); // Variável para rastrear steps visitados

    useEffect(() => {
        // Atualize a lista de steps visitados quando o currentPageIndex mudar
        if (!visitedSteps.includes(currentPageIndex)) {
            setVisitedSteps([...visitedSteps, currentPageIndex]);
        }
    }, [currentPageIndex, visitedSteps]);

    const isClickable = stepIndex <= currentPageIndex || visitedSteps.includes(stepIndex);

    return (
        <NavLink 
            className={
                ({isActive}) => `
                    ${styles.navlink} 
                    ${isActive ? styles.active : ""}
                    ${!isClickable ? styles.disabled : ""}
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
