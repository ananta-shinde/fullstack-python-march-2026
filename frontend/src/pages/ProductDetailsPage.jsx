import { useEffect, useState } from "react";
import { getProductById } from "../helper";
import SpecificationsList from "../common/SpecificationsList";

const ProductDetailsPage = () => {

    const [product,setProduct] = useState({})
    const [privewImage,setPreviewImage] = useState("")
    const [activeTab,setctiveTab] = useState("specifications")
    useEffect(()=>{
            setProduct(getProductById())
           
    },[])


    return ( <>
        <div className="conatiner-fluid">
            {/* ---------------------------------  top row --------------------------------------- */}
            <div className="row">
                <div className="col-6">

                    {
                        product.images?.map(img=>(<img src={privewImage}/>))
                    }
                    
                </div>
                 <div className="col-6">
                    <h3>{product.name}</h3>
                    <div className="my-5 w-75">
                        <h6>Highlights :</h6>
                        <ul>
                            {
                                product.highlights?.map(item=>(<li>{item}</li>))
                            }
                        </ul>
                    </div>
                    <h6>Price :</h6>
                    <p><span className="fs-1">{product.price}</span> </p>
                    <div>
                        <button className="btn btn-warning me-3 fw-bold" style={{padding:"1rem 5rem", fontSize:"1.2rem"}}>Buy Now</button>
                        <button className="btn btn-outline-dark fw-bold" style={{padding:"1rem 5rem", fontSize:"1.2rem"}}>Add To Cart</button>
                    </div>
                </div>
            </div>

             {/* ---------------------------------  second row --------------------------------------- */}
             <div className="row p-4 my-5">
                <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class={"nav-link "+ (activeTab == "specifications"?"active text-warning":"text-dark")} aria-current="page" data-bs-toggle="tab" data-bs-target="#specifications" onClick={()=>{setctiveTab("specifications")}} >Specifications</a>
                        </li>
                        <li class="nav-item">
                            <a class={"nav-link "+ (activeTab == "reviews"?"active text-warning":"text-dark")} data-bs-toggle="tab" data-bs-target="#reviews" onClick={()=>{setctiveTab("reviews")}}>Reiews</a>
                        </li>
                </ul>
                <div class="tab-content" >
                    <div className="tab-pane fade show active" id="specifications">
                        <SpecificationsList product={product}/>
                    </div>
                    <div className="tab-pane fade" id="reviews">
                        <h6 className="text-muted my-4">What customers says about this product :</h6>
                        <div className="review-card border-bottom py-2">
                            <div className="d-flex align-items-start ">
                                <i class="bi bi-person-circle fs-2" ></i>
                                <div className="mx-2">
                                    <h6 className="my-1">Name of customer</h6>
                                    <p>Rating</p>
                                </div>
                            </div>
                            <p>This product is best in the market</p>
                        </div>


                        <div className="review-card border-bottom py-2">
                            <div className="d-flex align-items-start ">
                                <i class="bi bi-person-circle fs-2" ></i>
                                <div className="mx-2">
                                    <h6 className="my-1">Name of customer</h6>
                                    <p>Rating</p>
                                </div>
                            </div>
                            <p>This product is best in the market</p>
                        </div>
                        <div className="review-card border-bottom py-2">
                            <div className="d-flex align-items-start ">
                                <i class="bi bi-person-circle fs-2" ></i>
                                <div className="mx-2">
                                    <h6 className="my-1">Name of customer</h6>
                                    <p>Rating</p>
                                </div>
                            </div>
                            <p>This product is best in the market</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </> );
}
 
export default ProductDetailsPage;