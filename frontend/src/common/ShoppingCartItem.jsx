const ShopingCartItem = (props) => {
    return ( 
        <>
            <div className="card p-4 my-2">
               <div className="row">
                 <div className="col-2">
                    <img src={props.product.thumbnail} style={{width:"150px"}} />
                 </div>
                 <div className="col">
                     <h5>{props.product.name}</h5>
                     <p>unit price : {props.product.price}</p>
                     <div>
                        <div className="d-flex align-items-center">
                             <label>Qty :</label>
                            <button className="btn btn-warning p-3">-</button>
                            <input style={{padding:"1rem"}} value={1}/>
                            <button className="btn btn-warning p-3">+</button>
                        </div>
                     </div>
                 </div>
                 <div className="col-2">
                    <h6>Sub total</h6>
                    <p className="fs-2">500000</p>
                 </div>
               </div>
            </div>
        </>
     );
}
 
export default ShopingCartItem;