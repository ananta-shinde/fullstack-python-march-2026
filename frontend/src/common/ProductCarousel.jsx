import ProductCard from "./ProductCard";

const ProductCaraousel = (props) => {

    return ( 
        <>
        {
            props.products && 
             <div className="p-2 border">
                <h4 className="m-2">{props.title}</h4>
                <div className="product-container d-flex gap-2">
                    {
                    props.products.map(product=>(<ProductCard product={product}/>))
                    }
                </div>
            </div>
        }
        
        </>
     );
}
 
export default ProductCaraousel;