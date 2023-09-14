import React, { createContext, useContext, useState, useEffect } from 'react';

export const NavigationContext = createContext();
NavigationContext.displayName = "Navigation";

export const NavigationProvider = ({ children }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(() => {
        // Inicialize o currentPageIndex a partir do localStorage ou 0 se não houver valor no localStorage.
        const storedPageIndex = localStorage.getItem('currentPageIndex');
        return storedPageIndex ? parseInt(storedPageIndex, 10) : 0;
    });

    const pages = ['', 'selectplan', 'pickaddons', 'finishingup'];

    useEffect(() => {
        // Atualize o localStorage sempre que o currentPageIndex mudar.
        localStorage.setItem('currentPageIndex', currentPageIndex.toString());
    }, [currentPageIndex]);

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
