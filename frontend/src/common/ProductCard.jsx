const ProductCard = (props) => {
    return ( 
        <div className="card p-3" style={{flex:"0 0 250px"}}>
                <img style={{width:"100%",height:"300px",objectFit:"contain"}} src={props.product.thumbnail} alt="" />
                <div className="card-body">
                    <h6 className="" style={{maxHeight:"3.5rem",overflow:"hidden"}}>{props.product.name}</h6>
                    <p className="fs-3">{props.product.price}</p>
                </div>
            </div>
     );
}
 
export default ProductCard;