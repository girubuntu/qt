import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
// import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';
// import Stack from '@mui/material/Stack';



function CreateTask() {
    const [title, setTitle] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [assignees, setAssignees] = useState([])
    const [project, setProject] = useState([])
    const [description, setDescription] = useState()
    const [priority, setPriority] = useState()
    const [file, setFile] = useState()
    const [assOptions, setAssOptions] = useState([])
    const [projOptions, setProjOptions] = useState([])


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/create",{title, start, end, assignees, project, description, priority})
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
        .then( result => setAssOptions(result.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/projects')
        .then( result => setProjOptions(result.data))
        .catch(err => console.log(err))
    }, [])
      

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center w-auto'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <div className="top-nav d-flex">
            <h2>Create Task</h2>
            {/* <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<CloseIcon />} >
                    Close
                </Button>
                <Button variant="outlined" endIcon={<CloseIcon/>}>
                    Close
                </Button>
            </Stack> */}
            </div>
          
          
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
            <select className="form-select" aria-label="Default select example" onChange={(e) => setAssignees(e.target.value)}>
                {
                    assOptions.map((opt, i) => <option value={opt.name}>{opt.name}</option>)
                }
            </select>            
          </div>
          <div className="mb-2">
            <label htmlFor="">Projects</label>
            <div className="input-group-append d-flex w-auto">
            <select className="form-select" aria-label="Default select example" onChange={(e) => setProject(e.target.value)}>
                {
                    projOptions.map((opt, i) => <option value={opt.name}>{opt.name}</option>)
                 
                }
            </select>
            <button class="btn btn-outline-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+ Add Project</button> 
            </div>
            
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
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Low" onChange={(e) => setPriority(e.target.value)} />
                    <label class="form-check-label" for="inlineCheckbox1">Low</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Normal" onChange={(e) => setPriority(e.target.value)}/>
                    <label class="form-check-label" for="inlineCheckbox1">Normal</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="high" onChange={(e) => setPriority(e.target.value)}/>
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