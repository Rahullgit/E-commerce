import {Add_To_CART, REMOVE_To_CART,EMPTY_TO_CART} from './constant'

export const cartData = (data=[], action) =>{
    switch(action.type){
        case Add_To_CART:
            //ADD to card logic
            console.warn("ADD_TO_CART CONDITION rahul" , action)
            return [action.data, ...data]

            case REMOVE_To_CART:
            //ADD to card logic
            console.warn("REMOVE TO CART CONDITION rahul" , action)
            // data.length= data.length ? data.length-1:[];
            const remainingItem = data.filter((item)=>item.id!==action.data);
            console.warn("remainning item ",remainingItem)
            return [...remainingItem]


            case EMPTY_TO_CART:
            //ADD to card logic
            console.warn("EMPTY TO CART CONDITION rahul" , action)
            data=[]
            return [...data]

            default:
                return data;
    }
     
}