import { useEffect, useState } from "react";

const DataTable = (props) => {

   var defaultPageSize = props.pageSize?props.pageSize:5;
   var [pageUI,setpageUI] = useState([]);
   const [data,setData] = useState(props.data);
//    const [pagesize,setPageSize] = useState(defaultPageSize);

   useEffect(()=>{
       var noofpages = Math.ceil(data.length/defaultPageSize);
       var uistructure = [];
       for(var i=1;i<=noofpages;i++){
            uistructure.push(<li class="page-item"><a class="page-link" href="#">{i}</a></li>)
        }
        setpageUI(uistructure)
   },[])

   const handleChange = (event)=>{
    var searchText = event.target.value;
    var filteredData =props.data.filter(item=>(item.name.toLowerCase().includes(searchText.toLowerCase())))
    setData(filteredData)
   }

    return ( 
        <div className="datatable-container p-4">
        <input placeholder="search" className="float-end form-control w-25" onChange={handleChange}/>
        <table className="table">
            <thead>
               <tr>
                    {
                        props.keyset.map(key=>(<th>{key}</th>))
                    }
               </tr>
            </thead>
            <tbody>
                {
                    data.map(item=>(
                        <tr>
                            {
                               props.keyset.map(key=>(
                                <td>{item[key]}</td>
                               )) 
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
       {
          data.length > defaultPageSize && 
            <ul class="pagination justify-content-end">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
     {pageUI}
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
       }
        </div>
     );
}
 
export default DataTable;