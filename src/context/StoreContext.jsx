import { createContext, useState,useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext()

const FoodlistProvider = ({children})=>{
    const [cartItems,setCartItems] = useState({})

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeCartItems =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
     const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
     }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const contextValue = {food_list,addToCart,cartItems,removeCartItems,getTotalCartAmount}
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default FoodlistProvider;
