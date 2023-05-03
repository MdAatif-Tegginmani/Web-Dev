import { Link } from 'react-router-dom';
import backgroundImage from '../../images/bg-main.jpg'
// import styled from 'styled-components';

import './Home.css'


function Home() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    backgroundSize: 'cover',
   
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    color: 'inherit',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 2px rgba(0,0,0,0.8)' ,
    

  };




  
  return (
  
      
      <nav className='cont'>
          
      
      <div  style={styles}>
            <Link to="/about" className='lin'>About</Link> 
            <Link to="/contact" className='lin'>Contact</Link> 
            <Link to="/skills" className='lin'>Skills</Link> 
        </div>
      </nav>
  );
}

export default Home;
