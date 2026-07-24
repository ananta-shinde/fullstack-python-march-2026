import Productcard from "./ProductCard";

const ProductGrid = (props) => {
    return ( 

        <div className="product-grid-container">
                     <div className="row g-3">
                        {
                           props.products? props.products.map(product=>(
                                 <div className="col-3">
                                    <Productcard product={product} />
                            </div>
                            )):
                            <div className="alert alert-danger">
                                No products to show
                            </div>

                        }
                           
                    </div>
        </div>
     );
}
 
export default ProductGrid;