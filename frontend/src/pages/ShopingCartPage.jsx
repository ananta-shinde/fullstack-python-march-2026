import ShopingCartItem from "../common/ShoppingCartItem";
import { getProductById } from "../helper";

const ShopingCartPage = () => {
    
    return ( 
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-9 p-4">
                <h4>Products :</h4>
                <hr/>
                <ShopingCartItem product={getProductById()}/>
                <ShopingCartItem product={getProductById()}/>
                <ShopingCartItem product={getProductById()}/>
                <ShopingCartItem product={getProductById()}/>
            </div>
            <div className="col p-4">
                <h4>Summary :</h4>
                <hr/>
            </div>
            </div>
        </div>
     );
}
 
export default ShopingCartPage;