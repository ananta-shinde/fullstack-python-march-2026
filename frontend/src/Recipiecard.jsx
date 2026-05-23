import recipies from "./data/recipies.json"
const RecipieCard  = (props) => {
    return ( 
         <div className="row">
                <div className="col-6">
                <h1>{props.data.name}</h1>
                {
                    props.data.tags.map((value)=>(<span className="me-3 btn btn-sm btn-warning">{value}</span>))
                }
                <h4>Ingredients :</h4>
                <ul>
                    {
                        props.data.ingredients.map((value)=>(<li>{value}</li>))
                    }
                </ul>
                <h4>Instructions :</h4>
                <ul>
                    {
                        props.data.instructions.map((value)=>(<li>{value}</li>))
                    }
                </ul>

            </div>
            <div className="col-6 p-4">
                <img className="img-fluid" src={props.data.image}/>
            </div>

            </div>
     );
}
 
export default RecipieCard;