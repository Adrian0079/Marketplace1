import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children}) =>{

    //Contador del carrito
    const [counter, setCounter ] =useState(0);
    
    //Suma de precios
    const [addPrice, setAddPrice] =useState(0)

   

    //Carrito de compras
    const[cartP, setCartP] = useState([]);

    

    //Productos de la api-------->

    const [products, setProducts ] =useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect (()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {setProducts(data)
        console.log(data)
        })
        
      }, [])

   //Productos de la api-------->

    console.log("contamos: ", counter)


    return(
        <ShoppingCartContext.Provider value={{
            counter,setCounter, 
            cartP, setCartP,
            products, setProducts,
            searchTerm, setSearchTerm,
            addPrice, setAddPrice
            
        }}>
            {children}
        </ShoppingCartContext.Provider>

        
    )



}

export default ShoppingCartProvider