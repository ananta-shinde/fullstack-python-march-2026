function SignUp(){

    const handleSubmit = (event)=>{
        event.preventDefault();
        // data collecting from UI
        var formdata = new FormData(event.target)
        formdata = Object.fromEntries(formdata)

        // posting data to backend
        var url = ""
        fetch(url,{
            method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
            body:JSON.stringify(formdata)
        })
        .then(res=>res.json())
        .then(res=>{
            //logic
        })
      
    }

    return(

        <div className="container  vh-100" >
            <div className="row  h-100 align-items-center">
                <div className="offset-3 col-6 bg-light shadow p-5">
                    <h4>Welcome User! </h4>
                    <p>Please fill in your details below</p>
                    <form className="border p-2 " onSubmit={handleSubmit}>
                            <input className="form-control mb-2" type="text" placeholder="Full Name" name="name" required/>
                            <input className="form-control mb-2" type="email" placeholder="Email" name="email" required/>
                            <input className="form-control mb-2" type="password" placeholder="Password" name="password" required/>
                            <input className="form-control mb-2" type="text" placeholder="Contact" name="contact" required/>
                            <input className="btn btn-dark w-100" type="submit" value="Create my account" />
                    </form>
                </div>
            </div>
        </div>
       
    )
}

export default SignUp;