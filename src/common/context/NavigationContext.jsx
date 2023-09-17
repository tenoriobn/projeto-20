import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const NavigationContext = createContext();
NavigationContext.displayName = "Navigation";

export const NavigationProvider = ({ children }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0); // Inicialize com 0
    const location = useLocation();

    const pages = ['', 'selectplan', 'pickaddons', 'finishingup'];

    useEffect(() => {
        // Encontre o índice da página atual com base na rota
        const pageIndex = pages.indexOf(location.pathname.replace('/', ''));
        
        // Se a página atual não for encontrada nas rotas, defina como 0
        if (pageIndex !== -1) {
            setCurrentPageIndex(pageIndex);
        }
    }, [location.pathname]);

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex((prevIndex) => prevIndex + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex((prevIndex) => prevIndex - 1);
        }
    };

    const goToStep = (stepIndex) => {
        if (stepIndex >= 0 && stepIndex < pages.length) {
            setCurrentPageIndex(stepIndex);
        }
    };

    return (
        <NavigationContext.Provider value={{ currentPageIndex, pages, goToNextPage, goToPreviousPage, goToStep }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    return useContext(NavigationContext);
};
