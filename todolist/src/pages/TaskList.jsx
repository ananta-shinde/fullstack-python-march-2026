import { useRef, useState } from "react";


function TaskList(){
   
   // const [formdata,setFormData] = useState({})

   // const handleChange = (event)=>{
   //      if(event.target.name == "name")
   //       setFormData({...formdata,name:event.target.value})
   //      if(event.target.name == "email")
   //         setFormData({...formdata,email:event.target.value})
   //      if(event.target.name == "city")
   //         setFormData({...formdata,city:event.target.value})
   //      if(event.target.name == "contact")
   //         setFormData({...formdata,contact:event.target.value})
        
   // }

   const handleSubmit = (event)=>{
      event.preventDefault();
      const formdata = Object.fromEntries(new FormData(event.target));
      console.log(formdata)
   }

   return(<>
       <div className="row p-4">
         <div className="col-6 offset-3">
            <h4></h4>
            <p></p>
         </div>
       </div>
       <div className="row p-4">
         <div className="col-6 offset-3">
           <form onSubmit={handleSubmit}>
               <h4>User registration</h4>
               <div className="bg-dark p-4">
                     <input className="form-control my-2" placeholder="enter your name" name="name" />
                     <input className="form-control my-2" placeholder="enter your email" name="email"  />
                     <input className="form-control my-2" placeholder="enter your city" name="city" />
                     <input className="form-control my-2" placeholder="enter your contact" name="contact" />
                     <button className="btn btn-success" >Submit</button>
               </div>
            </form> 
         </div>
       </div>
       
   </>)

}

export default TaskList;