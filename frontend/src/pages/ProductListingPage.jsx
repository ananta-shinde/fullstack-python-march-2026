import { useEffect, useState } from "react";
import ProductList from "../common/ProductList";
import { getProducts } from "../helper";

const ProductListingPage = () => {
    const[products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(getProducts)
    },[])

    return ( 
        <>
          <div className="container-fluid">
            <div className="row">
                <div className="col-3"></div>
                <div className="col">
                    <ProductList products={products}/>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default ProductListingPage;