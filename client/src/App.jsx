import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import CreateTask from './pages/CreateTask'
import Tasks from './pages/Tasks'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Tasks/>}></Route>
          <Route path='/login' element={< Login/>}></Route>
          <Route path='/create' element={< CreateTask />}></Route>
          <Route path='/sign-up' element={< SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
