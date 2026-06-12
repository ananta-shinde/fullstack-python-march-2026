import Counter from "./Counter";

function ProductCard(props){
    return(<>
    <div className="card">
                <h4>{props.product.title}</h4>
                <p>{props.product.price}</p>
                <Counter/>
            </div>
    </>)
}

export default ProductCard;