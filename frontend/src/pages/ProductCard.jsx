function ProductCard(props){
    return(
        <div className="col-4">
            <div className="card">
                <img src={props.product.image}/>
                <h4>{props.product.title}</h4>
                <p>{props.product.description}</p>
                <p>{props.product.price}</p>
                <p>{props.product.brandName}</p>
            </div>
        </div>
    )
}

export default ProductCard