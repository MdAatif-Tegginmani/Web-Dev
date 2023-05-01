import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

  
  return (
  
      
      <nav className='cont'>
        <div className='sub-main'>
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link> 
            <Link to="/skills">Skills</Link> 
        </div>
      </nav>
  );
}

export default Home;
