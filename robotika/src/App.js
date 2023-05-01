import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Kontak from './pages/Kontak';

function App() {
  return (   
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Tentang' element={<About/>} />
          <Route path='/Kontak' element={<Kontak/>} />
        </Routes>
      </Router>
  )
}

export default App;
