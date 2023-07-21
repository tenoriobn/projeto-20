import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Step( {children, to, styles} ) {
    return (
        <NavLink 
            className={
                ({isActive}) => `
                    ${styles.header__nav__navlink} 
                    ${isActive ? styles.header__nav__navlink__number_active : ""}
                `} 
            to={to}
        >
            {children}
        </NavLink>
    )
}
