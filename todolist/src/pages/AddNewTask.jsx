import { useState } from "react";

function AddNewTask(props){

    // const [description,setDescription] = useState("");
    // const [status,setStatus] = useState("");
    const handlesubmit = (e)=>{
        e.preventDefault()
        const formdata = new FormData(e.target)
        props.updatetask([...props.tasklist,{
            description:formdata.get("description"),
            status:formdata.get("status")
        }])
    }


    return(
        <div className="container p-4">
            <div className="row">
                <div className="offset-4 col-4">
                    <h4>Create New Task</h4>
                    <form className="border p-4 bg-light" onSubmit={handlesubmit}>
                        <div className="form-group mt-3">
                            <label>Enter task description below :</label>
                            <textarea className="form-control" name="description" ></textarea>
                        </div>
                        <div className="form-group my-3">
                            <label>Select status :</label>
                             <select className="form-control" name="status">
                                <option value="">-- select status --</option>
                                <option value="open">open</option>
                                <option value="inprogress">inprogress</option>
                                <option value="completed">completed</option>
                                <option value="closed">closed</option>
                            </select>
                        </div>
                        <input className="btn btn-dark w-100" type="submit" value="Save Task"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewTask;