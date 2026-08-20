const ProductListingItem = (props) => {
    return ( 
        <>
        <div className="card shadow my-2 p-4">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src={props.product.thumbnail}/>
                        </div>
                        <div className="offset-1 col">
                            <h4 className="my-3">{props.product.name}</h4>
                            <ul className="text-muted">
                                {
                                    props.product.highlights && props.product.highlights.map(item=>(
                                        <li>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col-2">
                            <p className="fs-2">Rs.{props.product.price}</p>
                             <button className="btn btn-warning fw-bold" style={{padding:"1rem 2rem", fontSize:"1rem"}}>Add To Cart</button>
                        </div>
                    </div>
                </div>
        </>
     );
}
 
export default ProductListingItem;