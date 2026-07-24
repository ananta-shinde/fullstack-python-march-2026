import { useEffect, useState } from "react";
import ProductList from "../common/ProductList";
import data from "../../data.json"
import ProductGrid from "../common/ProductGrid";
const ProductListingPage = () => {

    const [products, setProducts] = useState([]);
    const [viewType,setViewType] = useState("list")
    useEffect(()=>{
        // fetch product from backend
        setProducts(data.products)
    },[])

    const handleSearch = (event)=>{
            var searchquery = event.target.value
            if(searchquery != "" ){
            var filteredproducts = products.filter(product=> (product.title.toLowerCase().includes(searchquery.toLowerCase())))
            setProducts(filteredproducts)
            }else{
                 setProducts(data.products)
            }
    }

    return ( 
         <div className="row">
         <div className="col-3">
          
         </div>
         <div className="col p-5">
               <div>
                   <button onClick={()=>{setViewType("list")}}>list</button>
                   <button onClick={()=>{setViewType("grid")}}>grid</button>
                   <input type="text" placeholder="search here" onChange={handleSearch}/>
               </div>
              {viewType == "list" ? <ProductList products={products}/>
              :<ProductGrid products={products}/>
              }
          </div>
         
       </div>
     );
}
 
export default ProductListingPage;