import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){

    const [product,setProduct] = useState({})

    const {id} = useParams();

    const loaddata = ()=>{
        fetch('https://dummyjson.com/products/'+id)
        .then(res => res.json())
        .then(res=>{
             setProduct(res)
        });
    }

    useEffect(loaddata,[])

    return (<>
      <div className="container p-4">
        <div className="row">
            <div className="col">
                <img className="img-fluid" src={product.thumbnail}/>
            </div>
            <div className="col">
                 <h3>{product.title}</h3>
                 <p>{product.description}</p>
                 {/* <p>{product.tags.map(t=>(<span className="badge bg-light">{t}</span>))}</p> */}
                 <p className="fs-2 ">
                    $<span className="text-decoration-line-through">{product.price}</span >
                    <span>{}</span>
                    <span className="bg-warning">{product.discountPercentage}%</span></p>
                 <p>Category: {product.category}</p>
            </div>
        </div>
      </div>
    </>)
}

export default ProductDetails;