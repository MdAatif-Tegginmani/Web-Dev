import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/pages/about/About'

export default function App() {
  return (
    <div className='container'>
    

    <Router>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    {/*// <Route path='/contact' element={<Contact/>}></Route>
    // <Route path='/skills' element={<Skills/>}></Route>
    */}
    
    
    
    </Routes>
    
    </Router>
      

    </div>
      
  )
}
