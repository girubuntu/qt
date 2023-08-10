import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

import { Link } from 'react-router-dom';




function SignUp() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/register", {email,password})
        .then(result => {
            console.log(result)
            navigate('/login')
    })
    .catch(err => console.log(err))
    console.log(e)
    }
  return (
    
    <section className="vh-100" style={{backgroundColor: '508bfc'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
              <form action="" onSubmit={handleSubmit}>
                  <h3 className="mb-5">Register User</h3>  
                  <div className="form-outline mb-2">
                      <label className="form-label" for="typeEmailX-2">Email</label>
                      <input type="email" id="typeEmailX-2" className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)} />
                  </div>
  
                  <div className="form-outline mb-2">
                      <label className="form-label" for="typePasswordX-2">Password</label>
                      <input type="password" id="typePasswordX-2" className="form-control form-control-lg" 
                      onChange={(e) => setPassword(e.target.value)}/>
                  </div>  
                  <button className="btn btn-primary btn-block mb-2" type="submit">Sign Up</button>
  
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignUp