import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children}) =>{

    
    const [counter, setCounter ] =useState(0);


    //Detalles de el producto
    const [isDetail, setIsDetail ] =useState(false);
    const openProductDetail = () => setIsDetail(true);
    const closeProductDetail = () => setIsDetail(false);

    //Product Detail --- Mostramos producto
    const[showProduct, setShowProduct] = useState([]
        
    );
    

    //Carrito de compras
    const[cartP, setCartP] = useState([]);

    // const [check, setCheck ] =useState(false);
    // const openCheck = () => setCheck(true);
    // const closeCheck = () => setIsDetail(false);

    //Productos de la api-------->

    const [products, setProducts ] =useState(null);

    useEffect (()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data))
      }, [])

   //Productos de la api-------->

    console.log("contamos: ", counter)

    return(
        <ShoppingCartContext.Provider value={{
            counter,setCounter,
            openProductDetail, closeProductDetail, setIsDetail, isDetail, 
            showProduct, setShowProduct,
            cartP, setCartP,
            products, setProducts
            // check, setCheck, openCheck, closeCheck
        }}>
            {children}
        </ShoppingCartContext.Provider>

        
    )



}

export default ShoppingCartProvider