import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';

function App() {

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
