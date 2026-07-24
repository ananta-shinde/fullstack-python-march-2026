import AppButton from "./AppButton";

const ProductListItem = (props) => {
    return ( 
        <div className="product-list-item my-2">
            <div className="row align-items-start">
                <div className="col-3">
                    <img className="product-thumbnail" src={props.product.image} alt="" />
                </div>
                <div className="col-6">
                    <h2>{props.product.title}</h2>
                    <p>{props.product.rating}</p>
                    <ul className="text-muted">
                        {
                            props.product.highlights.map(item=>(<li>{item}</li>))
                        }
                    </ul>
                </div>
                <div className="col-3">
                    <p className="fs-2">{props.product.price}</p>
                    <AppButton text="Add to cart" varient="solid"/>
                </div>
            </div>
        </div>
     );
}
 
export default ProductListItem;