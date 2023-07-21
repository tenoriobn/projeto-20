import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Step( {children, to, styles} ) {
    return (
        <NavLink 
            className={
                ({isActive}) => `
                    ${styles.navlink} 
                    ${isActive ? styles.active : ""}
                `} 
            to={to}
        >
            {children}
        </NavLink>
    )
}
