import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/sign-up' element={<SignUpPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
