import type { ReactNode } from "react";
import type React from "react";

export type CounterContextType = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export type ProviderProps = {
    children: ReactNode;
};