import ImageCarousel from "../components/ImageCarouselLarge/imageCarousel";
import ImmageGallary from "../components/ImageGallary/ImageGallary";
import Navbar from "../components/Navbar/Navbar";
import ProductSection from "../components/ProductSection/ProductSection";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import SearchComponent from "../components/SearchComponent/SearchComponent";

const HomePage = () => {
    return ( 
        <>
          <Navbar/>
          <ImageCarousel/>
         <ProductSection/>
         <ImmageGallary/>
        
        </> 
        
    );
}
 
export default HomePage;