import tasklist from "./data/tasks.json"

function TaskRow(props){
  return(
    <tr>
              <td>{props.data.title}</td>
              <td>{props.data.status}</td>
            </tr>
  )
}


function DemoComponent(props){ 
    return (
        <>
          <table className="table">
            <tr>
              <th>Description</th>
              <th>Status</th>
            </tr>
            {
              tasklist.map(task=>(<TaskRow data={task}/>  ))
            }
          </table>
           
        </>
    )
}

export default DemoComponent