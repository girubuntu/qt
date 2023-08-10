import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState()
    const [passsword, setPassword] = useState()

    const handleSubmit = () => {
        
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter Email' className='form-control'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter Password' className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <button className='btn btn-success'>Submit</button>
      </form>
    </div>

  </div>
  )
}

export default Login