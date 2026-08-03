const UserDashboard = () => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 shadow">
                    <ul className="list-unstyled fw-bold fs-6 p-4">
                        <li className="border-bottom py-2">My Orders</li>
                        <li className="border-bottom py-2">My Reviews</li>
                        <li className="border-bottom py-2">My Cart</li>
                    </ul>
                </div>
                <div className="col">
                    <div className="shadow">
                        <div className="profile-cover" style={{height:"250px",backgroundColor:"lightgray",position:"relative"}}>
                            <div className="profile-photo" style={{width:"200px",height:"200px",position:"absolute", top:"150px",left:"10px"}}>
                                <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwYwdQpDO9CFTSGMDDj6Yd_W7aLpf2uC8kIy2zi93F1N6jpnxEpHyOmiZ&s=10"/>
                            </div>
                        </div>
                        <div className="p-4" style={{width:"80%",WebkitMarginStart:"auto"}}>
                            <h6>Personal details:</h6>
                            <hr/>
                            <table className="table">
                                <tr>
                                    <td className="fw-bold">Name:</td>
                                    <td><input className="form-control" type="text" value="Ananta Shinde" disabled/></td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Email:</td>
                                    <td><input className="form-control" type="text" value="demo@example.com" disabled/></td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Contact:</td>
                                    <td><input className="form-control" type="text" value="45556678676" disabled/></td>
                                </tr>
                            </table>
                            
                        </div>
                    </div>
                    <div className="shadow p-4">
                        <h6>My addresses</h6>
                        <hr />
                        <textarea name="" className="form-contol w-50" id="" col={10} value="Plot no 03, sainagar , chikalthata, chhatrapati sambhajinagar, maharshtra" disabled></textarea>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;