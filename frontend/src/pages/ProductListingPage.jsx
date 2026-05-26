import DemoComponent from "../DemoComponent";
import BannerSlider from "./BannerSlider";
import products from "../data/product.json"
import ProductCard from "./ProductCard";

function ProductListingPage(){
    return(
        <>
           <div className="container">
                <div className="row">
                   {
                        products.map(p =>( <ProductCard product={p}/>))
                   }
                </div>
           </div>
        </>
    )
}

export default ProductListingPage;