import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
  }
]

export default arrayofpaths;