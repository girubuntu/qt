import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Tasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setTasks(result.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-primary'>Add Task</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Start-date</th>
                        <th>End-date</th>
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
                                <td>
                                    <Link className='btn btn-success'>view</Link>
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