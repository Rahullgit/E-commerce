import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {productSearch} from '../redux/productAction';

const Header = () =>{
    const result = useSelector((state)=>state.cartData);
    const dispatch = useDispatch();
    console.warn("redux data n header", result)
    return(
        <div className="header">
          <Link to="/"><h1 className='logo'>E-Commerce</h1></Link>
          <div className='search-box' >
               <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder='Search Product' />
            </div>
          <Link to="/cart">
          <div className="cart_name">
             <span>{result.length}</span>
             <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" alt=''/>
          </div>
          </Link>
        </div>
    )
}

export default Header;