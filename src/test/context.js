import React from "react";
import { UseEffectAPI } from "./useEffectAPI";
const APPContext = React.createContext();

const AppProvider = ({children})=>{
    const val = UseEffectAPI();
    return(
    <>
    <APPContext.Provider value={val}>{children}</APPContext.Provider>
    </>
    );
}
export {APPContext,AppProvider};