import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();
PlanContext.displayName = "Plan";

export function PlanProvider({ children }) {
    const [activePlan, setActivePlan] = useState(null);
    const [isYearly, setIsYearly] = useState(false);

    return (
        <PlanContext.Provider value={{ activePlan, setActivePlan, isYearly, setIsYearly }}>
            {children}
        </PlanContext.Provider>
    );
};

export const usePlanContext = () => {
    const { activePlan, setActivePlan, isYearly, setIsYearly } = useContext(PlanContext);

    return {
        activePlan,
        setActivePlan,
        isYearly,
        setIsYearly,
    };
};