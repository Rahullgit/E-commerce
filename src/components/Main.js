import { addToCart, removeToCart,emptyToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import {useSelector} from 'react-redux';
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  console.warn("data in main conponents FROM saaga " ,data);
  

  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <div>
      
      <div><button onClick={() => dispatch(emptyToCart())}>Empty To Cart</button></div>
      <div className='product-container'>
          {
            data.map((item) =><div key={item.id} className="product-item">
             <img src={item.photo} alt="" className="two" />
             <div>Name:{item.name} </div>
             <div>Price:{item.price} </div>
             <div>Brand:{item.brand} </div>
             <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove To Cart</button>
             </div>

            </div>)
          }
      </div>
    </div>
  );
}

export default Main;
