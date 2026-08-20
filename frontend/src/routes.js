import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListingPage from "./pages/ProductListingPage";
import HomeTemplate from "./templates/homeTemplate";


export const routes = [
    {
        path:"/",
        element:<HomeTemplate/>,
        children:[
           {
             path:"",
             element:<HomePage/>
           },
           {
             path:"categories/:categoryId/list",
             element:<ProductListingPage/>
           },
           {
             path:"/product/:productId",
             element:<ProductDetailsPage/>
           },
           {
             path:"product/:productId/checkout",
             element:"<CheckoutPage/>"
           },
        ]
    },
    {
        path:"/account/:userId/",
        element:"<UserDashboard/>",
        children:[
            {
                 path:"orders",
                 element:"<Orders/>"
            },
             {
                 path:"profile",
                 element:"<UserProfile/>"
            },
            
        ]
    },
    {
        path:"/cart/:userId"
    }


]

