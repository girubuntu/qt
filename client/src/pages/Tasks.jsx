import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'



function Tasks() {

    const [tasks, setTasks] = useState([])
    
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setTasks(result.data))
        .catch(err => console.log(err))
    }, [])
 
  return (
    <div className='justify-content-center align-items-center'>
        <h2 style={{textAlign: 'center', marginTop: '0.5rem'}}>List of Tasks</h2>
        <div className='w-100 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-primary' style={{marginBottom: '0.8rem'}}>Add Task</Link>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Start-date</th>
                        <th>End-date</th>
                        <th>Assignee</th>
                        <th>Project</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        tasks.map((task) => {
                           return <tr>
                                <td>{task.title}</td>
                                <td>{task.start}</td>
                                <td>{task.end}</td>
                                <td>{task.assignees}</td>
                                <td>{task.project}</td>
                                <td>{task.priority}</td>
                                <td>
                                    
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks