import { Link } from "react-router";

const HorizontalScrollContiner = (props) => {
    return ( 
        <div className="d-flex text-center w-100" style={{ overflowX:"auto", scrollbarWidth:0}}>
           {
            props.data.map(item=>(
                <Link to={"categories/"+item.id+"/list"} className="text-decoration-none ">
                 <div className="card py-2 px-3 mx-2" style={{flex:"0 0 150px",width:"150px"}}>
                <h6 className="text-warning">{item.name}</h6>
            </div>
            </Link>
            ))
           }
          
        </div>
     );
}
 
export default HorizontalScrollContiner;