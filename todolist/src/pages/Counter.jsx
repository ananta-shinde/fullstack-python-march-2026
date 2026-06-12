import { useState } from "react";

function Counter(){
    // const count = 0;
    const [count,setCount] = useState(0);

    function handelIncrement(){
        // count = count+1;
         setCount(count+1)
         console.log(count)
    }

    function handleDecrement(){
        if(count!=0){
            setCount(count-1)
        }
            
    }
   
    return(
        <>
         <div className="container p-4">
            <div className="row">
                <div className="offset-3 col-6 ">
                    
                   <div className="bg-dark p-4 text-center">
                    {/* <h4 className="text-center text-white">Counter Example</h4> */}
                          <button onClick={handleDecrement} className="btn btn-light">-</button>
                        <input className="mx-3" type="text" value={count} name=""/>
                        <button onClick={handelIncrement} className="btn btn-light">+</button>
                   </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Counter