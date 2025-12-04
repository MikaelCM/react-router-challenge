export type ColorState = {
    color: string;
}

export type ColorAction = 
    | {type: "RED"} 
    | {type: "BLUE"}

export interface TitleColorContextType extends ColorState {
    dispatch: React.Dispatch<ColorAction>
}

