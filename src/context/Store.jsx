import { createContext, useState } from "react";

export const ContextStore  = createContext(null);


export function DataProvider(props){

// For Search (Functionality)
const [searchText,setSearchText] = useState("")
  

// For Add to Favourite (Functionality) 
const [favList,setFavList] =  useState([]);

// In Favourite : if Main Pages show Book Heart icon to add favourite page
// But in Favourite page we don't need Heart icon any more so
//we replace Heart icon to Delete icon so user will remove his favourite book

let check_bool_fav = false;



//For Delete Functionality
const [forDelete,setForDelete] = useState([]);



return (

<ContextStore.Provider value={{searchText,setSearchText,favList,setFavList,check_bool_fav,forDelete,setForDelete}} >

    {props.children}
    
</ContextStore.Provider>
    
    )

}

