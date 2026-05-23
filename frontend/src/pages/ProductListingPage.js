import DemoComponent from "../DemoComponent";
import BannerSlider from "./BannerSlider";

function ProductListingPage(){
    return(
        <>
        <h1>Product List</h1>
        <BannerSlider/>
        <DemoComponent menus={products}/>
        </>
    )
}

export default ProductListingPage;