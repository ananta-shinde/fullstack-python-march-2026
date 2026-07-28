import ProductListItem from "./ProductListItem";

const ProductList = (props) => {

    
    return ( 
        <div>
             {
            props.products && props.products.map(product=>(<ProductListItem product={product}/>))
          }
        </div>
     );
}
 
export default ProductList;



