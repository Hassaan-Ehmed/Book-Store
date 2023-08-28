import { createContext, useState } from "react";

export const ContextStore  = createContext(null);


export function DataProvider(props){


const [searchText,setSearchText] = useState("")
  
return (

<ContextStore.Provider value={{searchText,setSearchText}} >

    {props.children}
    
</ContextStore.Provider>
    
    )

}

