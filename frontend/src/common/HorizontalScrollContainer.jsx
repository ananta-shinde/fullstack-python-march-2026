const HorizontalScrollContiner = (props) => {
    return ( 
        <div className="d-flex text-center w-100" style={{ overflowX:"auto", scrollbarWidth:0}}>
           {
            props.data.map(item=>(
                 <div className="card py-2 px-3 mx-2" style={{flex:"0 0 150px",width:"150px"}}>
                <h6>{item.name}</h6>
            </div>
            ))
           }
          
        </div>
     );
}
 
export default HorizontalScrollContiner;