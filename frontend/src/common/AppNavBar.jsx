import { useState } from "react";
import {getProducts} from "../helper"

const AppNavBar = () => {
   
    // search result state
    const [searchResult, setSearchResult] = useState([])

    // search handler
    const handleSearch = (event)=>{
            // 1. get the value from text box 
            var searchQuery = event.target.value;
            if(searchQuery != ""){
            setSearchResult(getProducts().filter(product=>(product.name.toLowerCase().includes(searchQuery.toLowerCase()))))
            }else{
                setSearchResult([])
            }
    }

    return ( 
        <div className="container-fluid border-bottom border" style={{padding:"1% 10%"}}>
            <div className="row align-items-center">
                <div className="col-2">
                    <h3>Shopkart</h3>
                </div>
                <div className="col search-control">
                       {/* search box container */}
                     <input className="form-control" onChange={handleSearch} type="text" placeholder="search for products" />
                     {
                        searchResult.length != 0 && 
                        //  search result container to show result
                        <div className="search-result-container p-4 shadow">
                            <ul className="list-unstyled">
                                {
                                    searchResult.map(item=>(<li>{item.name}</li>))
                                }
                            </ul>
                        </div>
                     }
                </div>
                <div className="col-3">
                    <ul className="list-unstyled d-flex justify-content-center align-items-center fs-3">
                        <li className="mx-3"><i class="bi bi-bag"><span className="fs-5 text-muted">cart</span> </i></li>
                        <li className="mx-2"><i class="bi bi-person-circle "><span className="fs-5 text-muted">Account</span></i></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default AppNavBar;


// steps to follow:
// 1. complete the structure with three column layout earch for logo , search box and menus list (cart, profile)
// 2. wrap the icons with Link component and set paths navigate to
// 3. implement onchange handler for search box
// 4. implement search result container to show result

// logic for search handler
// 1. get the value from text box ( event.target.value)
// 2. logic to get products filtered from products array (original products array should be used from data.json)
// 3. assign fitered array to state with name as searchresult