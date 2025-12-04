/* eslint-disable react-refresh/only-export-components */

// 1 - Criar context
import { createContext, useState } from "react";

import type { CounterContextType, ProviderProps } from "../Types/CounterContextType";

export const CounterContext = createContext<CounterContextType | null>(null);

// 2 - Criar provider
export const CounterContextProvider = ({ children }: ProviderProps) => {
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}