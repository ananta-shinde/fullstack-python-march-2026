import { Children } from "react";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CustomerList from "./components/CustomerList";
import SellerList from "./components/SellerList";

const arrayofpaths = [
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
   {
    path:"/admin/dashboard/",
    element:<AdminDashBoard/>,
    children:[
      {
         path:"customers",
         element:<CustomerList/>
      },
       {
         path:"sellers",
         element:<SellerList/>
      }
    ]
  }
]

export default arrayofpaths;