import { createContext, useState } from "react";

export const DataContext=createContext(null);

const DataProvider=({children})=>{
    const[Auth_UserName,setAuthUserName]=useState('');
    return(
        <DataContext.Provider value={{
            Auth_UserName,
            setAuthUserName

        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;