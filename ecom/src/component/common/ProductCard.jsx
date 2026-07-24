const Productcard = (props) => {
    return ( 
        <div className="product-card">
            {
            props.product.image ? 
            <img className="product-thumbnail" src={props.product.image} alt="product-image"/>
            :<img className="product-thumbnail" src="https://www.e-coexist.com/wp-content/uploads/woocommerce-placeholder-800x800.png" alt="product-image"/>
            }
            {props.product.title && <h4 className="text-truncate my-3">{props.product.title}</h4>}
            {props.product.rating && <p>{props.product.rating}</p>}
            {props.product.price && <p>Rs.{props.product.price}</p>}
        </div>
     );
}
 
export default Productcard;