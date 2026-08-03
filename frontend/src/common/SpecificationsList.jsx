const SpecificationsList = (props) => {
    return (  <>
        {
                        props.product.specifications && Object.keys(props.product.specifications).map(key=>(<>
                        <h4>{key}</h4>
                        <table className="table">
                        {
                            
                            Object.keys(props.product.specifications[key]).map(k=>(
                                <tr className="border-bottom">
                                <td className="w-25">{k}</td> 
                                <td>: {props.product.specifications[key][k]}</td>
                                 </tr>
                            ))
                            }
                            </table>
                           
                            </>))
                      }
    </> );
}
 
export default SpecificationsList;