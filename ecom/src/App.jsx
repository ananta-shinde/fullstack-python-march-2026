import logo from './logo.svg';
import './App.css';
import AppButton from './component/common/AppButton';
import Productcard from './component/common/ProductCard';
import ProductGrid from './component/common/ProductGrid';
import ProductListItem from './component/common/ProductListItem';
import ProductList from './component/common/ProductList';
import ProductListingPage from './component/pages/ProductListingPage';
import DataTable from './component/common/DataTable';

function App() {

  const keyset =["name","category","price","brand","rating"]
    const products = [
        {
            name:"p1",
            brand:"hp",
            price:75000,
            category:"laptop",
            rating:4.5
        },
        {
            name:"p2",
            brand:"hp",
            price:43000,
            category:"laptop",
            rating:4.5
        },
        {
            name:"p3",
            brand:"hp",
            price:25000,
            category:"tabs",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        },
        {
            name:"p4",
            brand:"Apple",
            price:145000,
            category:"mobile",
            rating:4.5
        }
    ]

     const categories = [
        {
            name:"c1",
            image:""
        },
        {
            name:"c2",
            image:""
           
        },
        {
            name:"c3",
           image:""
           
        },
        {
            name:"c4",
           image:""
        }
    ]

  const handleClick = ()=>{
            
    }
  return (
    <>
       {/* <AppButton text="buy now" varient="solid" onClick="" />
       <AppButton text="Add to cart" varient="outline" onClick=""/>
       <Productcard product={{title:"demo fadfafadfdafdfdfdfdfddfdfdfdfDFF",price:5000,image:"https://cdn.shopify.com/app-store/listing_images/46efa3dae66c435783fbe94c2ab48cd4/icon/CPzz19zQxogDEAE=.jpeg"}} />
       {/* <Productcard/> */}
       {/* <ProductGrid/> */} 
      {/* <ProductListingPage/> */}
      <DataTable keyset={keyset} data={products} pageSize={5}/>
      <DataTable keyset={["name","image"]} data={categories}/>
      
       
    </>
  )
}

export default App;
