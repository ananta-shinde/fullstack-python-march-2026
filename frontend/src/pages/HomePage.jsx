import AppCategoryBar from "../common/AppCategoryBar";
import AppNavBar from "../common/AppNavBar";
import HorizontalScrollContiner from "../common/HorizontalScrollContainer";
import MainBannerSlider from "../common/MainBannerSlider";
import ProductCaraousel from "../common/ProductCarousel";
import UserDashboard from "../common/UserDashboard";
import { getProducts } from "../helper";
import ProductDetailsPage from "./ProductDetailsPage";
import ShopingCartPage from "./ShopingCartPage";

const HomePage = () => {
    return (
        <>
          {/* ------------------ header component ------------------------- */}
            <AppNavBar/>

            <div className="content-panel" style={{padding:"1% 10%"}}>
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
            </div>
            

        </>
      );
}
 
export default HomePage;