import ChildComponent from "./ChildComponent"

function ParentComponent(){
    var data ={
        users: [
        {
            name:"John",
            email:"John@123.com"
        },
         {
            name:"Virat",
            email:"Virat@123.com"
        },
         {
            name:"Rahul",
            email:"Rahul@123.com"
        }
    ],
    products:[
        {
            name:"p1",
            category:"c1"
        },
        {
            name:"p2",
            category:"c2"
        },
        {
            name:"p3",
            category:"c1"
        },
        {
            name:"p4",
            category:"c1"
        }
    ]
    } 
    
   
    return(
        <ChildComponent />
    )
}

export default ParentComponent