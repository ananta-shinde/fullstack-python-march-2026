import AppCategoryBar from "../common/AppCategoryBar";
import AppNavBar from "../common/AppNavBar";
import HorizontalScrollContiner from "../common/HorizontalScrollContainer";
import MainBannerSlider from "../common/MainBannerSlider";
import ProductCaraousel from "../common/ProductCarousel";
import UserDashboard from "../common/UserDashboard";
import { getProducts } from "../helper";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductListingPage from "./ProductListingPage";
import ShopingCartPage from "./ShopingCartPage";

const HomePage = () => {
    return (
        <>
          

            
                      {/* ---------------------- category bar ------------------------------- */}
                <AppCategoryBar/>

                {/* ---------------------------- main banner slider ----------------------------- */}
                <MainBannerSlider/>

                <ProductCaraousel products={getProducts()} title={"Best from Realme"}/>
                <ProductCaraousel products={getProducts()} title={"Best from Realme"}/>
                <ProductCaraousel products={getProducts()} title={"Best from Realme"}/>

                <ProductDetailsPage/>

                <UserDashboard/>
                <ShopingCartPage/>
                <ProductListingPage/>
            
            

        </>
      );
}
 
export default HomePage;