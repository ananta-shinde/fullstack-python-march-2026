
import {Link, Outlet} from "react-router"
function AdminDashBoard(){
    return(
        <div className="container-fluid p-0">
             <nav className="bg-secondary p-2 px-5 d-flex justify-content-between">
                          <h4 className="text-white fw-bold">Shopkart</h4>
                          <h4>Settings</h4>
            </nav>
            <div className="row">
                <div className="col-3 bg-dark text-white vh-100">
                    <h4 className="m-4">Admin Dashboard</h4>
                    <ul className="list-unstyled list-group mt-5">
                        <li className="list-group-item bg-transparent text-white" data-bs-toggle="collapse" data-bs-target="#collapseExample">Users</li>
                        <div className="ms-4 collapse" id="collapseExample">
                            <li className="p-2"><Link to="/admin/dashboard/customers">Customers</Link></li>
                            <li className="p-2"><Link to="/admin/dashboard/sellers">Sellers</Link></li>
                        </div>
                        <li className="list-group-item bg-transparent text-white">Products</li>
                        <li className="list-group-item bg-transparent text-white">Categories</li>
                        <li className="list-group-item bg-transparent text-white">Brands</li>
                        
                    </ul>
                </div>
                <div className="col bg-light p-0">
                     <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard;