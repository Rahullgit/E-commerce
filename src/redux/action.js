import {Add_To_CART, REMOVE_To_CART,EMPTY_TO_CART} from './constant'



export const addToCart = (data) =>{
    console.warn("action called add", data)
    return {
        type: Add_To_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.warn("action called remove ", data)
    return {
        type: REMOVE_To_CART,
        data
    }
}

export const emptyToCart = () =>{
    console.warn("action called empty ")
    return {
        type: EMPTY_TO_CART,
    }
}