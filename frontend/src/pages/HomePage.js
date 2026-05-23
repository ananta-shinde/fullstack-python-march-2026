import MainNav from "./MainNav";
import Footer from "./Footer";
import BannerSlider from "./BannerSlider";
import DemoComponent from "../DemoComponent";
function HomePage(){
    return(
        <>
        <MainNav/>
        <BannerSlider/>
        <DemoComponent menus={["mango","apple"]}/>
        <Footer/>
        </>
    )
}

export default HomePage;
