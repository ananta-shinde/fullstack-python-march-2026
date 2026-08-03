import { useEffect, useState } from "react";
import HorizontalScrollContiner from "./HorizontalScrollContainer";
import { getCategories } from "../helper";

const AppCategoryBar = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        setCategories(getCategories())
    },[])
    return ( 
        <div className="border border-bottom" style={{padding:"1% 5%", width:"100%"}}>
              <HorizontalScrollContiner data={categories} />
        </div>
      
     );
}
 
export default AppCategoryBar;