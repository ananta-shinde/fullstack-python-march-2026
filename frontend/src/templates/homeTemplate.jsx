import { Outlet } from "react-router";
import AppNavBar from "../common/AppNavBar";

const HomeTemplate = () => {
    return ( <>
        {/* ------------------ header component ------------------------- */}
            <AppNavBar/>

        <div className="content-panel" style={{padding:"1% 10%"}}>
            <Outlet/>
        </div>
    </> );
}
 
export default HomeTemplate;