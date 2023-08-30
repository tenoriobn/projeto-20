import { createContext, useContext, useState } from "react";

const AddonsContext = createContext();
AddonsContext.displayName = "Addons";

export function AddonsProvider({ children }) {
    const [selectedAddons, setSelectedAddons] = useState(null);

    return (
        <AddonsContext.Provider value={ { selectedAddons, setSelectedAddons } }>
            {children}
        </AddonsContext.Provider>
    );
};

export const useAddonsContext = () => {
    const { selectedAddons, setSelectedAddons } = useContext(AddonsContext);

    return {
        selectedAddons, 
        setSelectedAddons
    };
};