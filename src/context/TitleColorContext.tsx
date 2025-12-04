/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer } from "react"

import type { ColorAction, ColorState, TitleColorContextType } from "../Types/TitleColorContext";

const initialContextValue: TitleColorContextType = {
    color: "purple",
    dispatch: () => null,
}

export const TitleColorContext = createContext<TitleColorContextType>(initialContextValue) 

export const titleColorReducer = (state: ColorState, action: ColorAction) => {
    
    switch(action.type) {
        case "RED":
            return {...state, color: "red"};
        
        case "BLUE":
            return {...state, color: "blue"};

        default:
            return state;
    }
}

export const TitleColorContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })

    console.log("Title color context: ", state);

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )

}