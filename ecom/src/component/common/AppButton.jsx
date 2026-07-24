const AppButton = (props) => {
    
    return ( 
        <>
        { props.varient == "solid" && <button className="btn btn-primary" onClick={props.onClick}>{props.text}</button>}
        {props.varient == "outline" && <button className="btn btn-outline-primary" onClick={props.onClick}>{props.text}</button>}
        </>
     );
}
 
export default AppButton;