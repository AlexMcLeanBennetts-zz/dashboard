import React, { createContext, useContext, useEffect, useState } from 'react';
import { policyData } from './data/policyData';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [policyInformation, setPolicyInformation] = useState();

    useEffect(() => {
        setPolicyInformation(policyData);
    }, []);

    return (
        <AppContext.Provider
            value={{ policyInformation }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }