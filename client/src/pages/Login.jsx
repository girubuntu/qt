 import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/login", {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "success"){
                navigate('/')
            }
            
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
                <h3 className="mb-5">Sign in</h3>

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


                <div className="form-check d-flex justify-content-start mb-4">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label className="form-check-label" for="form1Example3"> Remember password </label>
                
                </div>
                <div className='d-flex justify-content-space-between'>
                <Link to="/sign-up" className='inline'>Don't have accout, register here.</Link>

                <button className="btn btn-primary btn-block" type="submit">Login</button>
                </div>
                

            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login