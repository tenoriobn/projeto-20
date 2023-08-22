import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext();
PlanContext.displayName = "Plan";

export function PlanProvider({ children }) {
    const [activePlan, setActivePlan] = useState(null);

    return (
        <PlanContext.Provider value={{ activePlan, setActivePlan }}>
            {children}
        </PlanContext.Provider>
    );
};

export const usePlanContext = () => {
    const { activePlan, setActivePlan } = useContext(PlanContext);

    return {
        activePlan,
        setActivePlan,
    };
};