import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children}) =>{

    const [counter, setCounter ] =useState(0);

    const [isDetail, setIsDetail ] =useState(false);
    const openProductDetail = () => setIsDetail(true);
    const closeProductDetail = () => setIsDetail(false);

    //Product Detail --- Mostramos producto
    const[showProduct, setShowProduct] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });
    


    console.log("contamos: ", counter)

    return(
        <ShoppingCartContext.Provider value={{
            counter,setCounter,
            openProductDetail, closeProductDetail, setIsDetail, isDetail, 
            showProduct, setShowProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>

        
    )



}

export default ShoppingCartProvider