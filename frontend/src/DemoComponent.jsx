import recipies from "./data/recipies.json"
import RecipieCard from "./Recipiecard"
function DemoComponent(props){

    
    return (
        <>
        <div className="container ">
          {
            recipies.map(value=>(<RecipieCard data={value} color="red"/>))
          }
        </div>
        </>
    )
}

export default DemoComponent