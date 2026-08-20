import ProductListingItem from "./ProductListingItem";

const ProductList = (props) => {
    return ( 
        <>
          {
            props.products.map(product=>(
                <ProductListingItem product={product}/>
            ))
          }
        </>
     );
}
 
export default ProductList;