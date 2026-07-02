import { useEffect, useState } from "react";

function CustomerList(){

    // var users=[]
    const [users,setusers] = useState([])

   useEffect(()=>{
         fetch("https://dummyjson.com/users")
   .then(res=>res.json())
   .then(res=>{
       setusers(res.users)
   })
   },[])

   const handleChange = (event)=>{
       if( event.target.value == "female")
       {
            var femaleUsers  = users.filter(u=>(u.gender == "female"))
            setusers(femaleUsers)
       }
   }

  

    return (
        <div className="p-4">
        <h4 className="text-muted">Customers List:</h4>
        <div>
            <label>Gender:</label>
            <select onChange={handleChange}>
                <option >male</option>
                <option >female</option>
            </select>
        </div>
        <table className="table border">
            <thead>
            <tr className="bg-dark text-white">
                <th className="p-2">Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>
              {
                users.map(u=>( <tr>
                <td className="p-2">{u.firstName}</td>
                <td>Demo@gmail.com</td>
                <td>9879799799</td>
                <td>{u.gender}</td>
            </tr>))
              }
            </tbody>
        </table>
        </div>
    )
}

export default CustomerList;