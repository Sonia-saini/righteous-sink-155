import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./reducer";
const inititate=[];
export const cartContext=createContext();
export default function Cartapi({children}){
const [state,dispatch]=useReducer(Reducer,inititate)
    return (
        <cartContext.Provider value={{state,dispatch}}>{children}</cartContext.Provider>
    )
}
