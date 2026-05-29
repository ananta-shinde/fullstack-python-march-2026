import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AddNewTask from "./AddNewTask";

function TaskList(){
    const [task,settask] = useSearchParams();
    const [tasklist,setTaskList] = useState([])

    return(
        <>
         <div className="container">
            <div className="row">
                
                <div className="offset-3 col-6 py-5">
                    <h4 className="text-muted mb-3">My Task List :</h4>
                    <table className="table border">
                        <tr className="bg-dark text-white">
                            <th className="p-4">Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        {
                            tasklist.map(task=>(
                                <tr className="">
                            <td className="p-4">{task.description}</td>
                            <td>{task.status}</td>
                            <td>
                                <button className="btn btn-info btn-sm me-2">Edit</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
            <AddNewTask tasklist = {tasklist} updatetask={setTaskList}/>
         </div>
        </>
    )
}

export default TaskList;