import {PRODUCT_LIST, SET_PRODUCT_LIST} from './constant'

export const productData = (data=[], action) =>{
    switch(action.type){
        case SET_PRODUCT_LIST:
                //ADD to card logic
                console.warn("PRODUCT LIST CONDITION rahul" , action)
                return [...action.data]

            
            default:
                return data;
    }
     
}