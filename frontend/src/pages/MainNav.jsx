import { Link } from "react-router-dom";

function MainNav(){
    return(
    <section className="bg-dark">
      <div className="container ">
          <nav className="d-flex justify-content-between  text-white align-items-center" style={{height:"70px"}}>
            <h4><Link to="/">Shopkart</Link></h4>
            <div className="w-75 d-flex">
                <input className="form-control " type="text" placeholder="search here ...."/>
                <button className="btn btn-outline-light">Search</button>
            </div>
            <ul className="list-unstyled d-flex align-items-center">
                <li className="me-2">Wishlist</li>
                <li className="me-2"><Link to="/cart">cart</Link></li>
                <li className="me-2">My account</li>
            </ul>
        </nav>
      </div>
      </section>
    )
}

export default MainNav;