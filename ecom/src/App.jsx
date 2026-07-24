import logo from './logo.svg';
import './App.css';
import AppButton from './component/common/AppButton';
import Productcard from './component/common/ProductCard';
import ProductGrid from './component/common/ProductGrid';
import ProductListItem from './component/common/ProductListItem';
import ProductList from './component/common/ProductList';
import ProductListingPage from './component/pages/ProductListingPage';

function App() {

  const handleClick = ()=>{
            
    }
  return (
    <>
       {/* <AppButton text="buy now" varient="solid" onClick="" />
       <AppButton text="Add to cart" varient="outline" onClick=""/>
       <Productcard product={{title:"demo fadfafadfdafdfdfdfdfddfdfdfdfDFF",price:5000,image:"https://cdn.shopify.com/app-store/listing_images/46efa3dae66c435783fbe94c2ab48cd4/icon/CPzz19zQxogDEAE=.jpeg"}} />
       {/* <Productcard/> */}
       {/* <ProductGrid/> */} 
      <ProductListingPage/>
      
       
    </>
  )
}

export default App;
