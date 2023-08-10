import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'



function CreateTask() {
    const [title, setTitle] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [assignees, setAssignees] = useState([])
    const [project, setProject] = useState()
    const [description, setDescription] = useState()
    const [priority, setPriority] = useState()
    const [file, setFile] = useState()
    const [assOptions, setAssOptions] = useState()
    const [projOptions, setProjOptions] = useState()


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/create",{title, start, end, assignees})
        .then(result => {
          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
      }

      const handleAssignees = (e) => {
        
      }

      useEffect(() => {
        axios.get('http://localhost:3001/assignees')
        .then( result => setAssignees(result.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/projects')
        .then( result => setProject(result.data))
        .catch(err => console.log(err))
    }, [])
      

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Create Task</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Enter Name' className='form-control'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <div>
                <label htmlFor="">Start Date</label>
                    <input type="date" className='form-control'
                    onChange={(e) => setStart(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">End Date</label>
                    <input type="date" className='form-control'
                    onChange={(e) => setEnd(e.target.value)}/>
            </div>             
              
            </div>
          
         
         
          <div className="mb-2">
            <label htmlFor="">Assignees</label>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setAssOptions(e.target.value)}>
                {
                    assignees.map((opt, i) => <option>{opt.name}</option>)
                }
            </select>            
          </div>
          <div className="mb-2">
            <label htmlFor="">Projects</label>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setProjOptions(e.target.value)}>
                {
                    project.map((opt, i) => <option>{opt.name}</option>)
                 
                }
            </select> 
            </div>
            <div className="mb-2">
                <label htmlFor="">Description</label>
                <input type="message" className='form-control'
                onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Priority</label>
            </div>
            <div className="mb-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Low</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">Normal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1">High</label>
                </div>
            </div>
           

        
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask