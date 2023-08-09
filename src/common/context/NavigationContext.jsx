import React, { createContext, useContext, useState } from 'react';

export const NavigationContext = createContext();
NavigationContext.displayName = "Pagamento";

export const NavigationProvider = ({ children }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const pages = ['', 'selectplan', 'pickaddons', 'finishingup'];

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