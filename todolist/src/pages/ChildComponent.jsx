import GrandChildComponent from "./GrandChildComponent"

function ChildComponent(props){
    // props.message = "another message"
    return(
        <GrandChildComponent />
    )
}

export default ChildComponent