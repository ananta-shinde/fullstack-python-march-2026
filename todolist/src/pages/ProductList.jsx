import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function ProductList(){

    // var products = []

   const [products,setProducts] = useState([])

    const loaddata = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res=>{
            console.log(res.products)
            // products = res.products
            setProducts(res.products)
        });

    }

   

    useEffect(loaddata,[])

    return(<>
            <div className="container p-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <div className="row g-5">
                           {
                             products.map(product=>(
                                 <div className="col-4">
                                    <Link to={"/products/"+product.id} className="text-decoration-none">
                                    <div className="card p-4">
                                        <img src={product.thumbnail} alt=""  />
                                        <h5>{product.title}</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="fs-2">${product.price}</p>
                                            <div>
                                                <p className="badge bg-success">{product.rating}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                            </div>
                             ))
                           }
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default ProductList