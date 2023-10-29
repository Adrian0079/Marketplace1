import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children}) =>{

    const [counter, setCounter ] =useState(0);
    console.log("contamos: ", counter)

    return(
        <ShoppingCartContext.Provider value={{
            counter,setCounter
        }}>
            {children}
        </ShoppingCartContext.Provider>

        
    )



}

export default ShoppingCartProvider