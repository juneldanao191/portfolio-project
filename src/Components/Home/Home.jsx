import React from 'react';
import Profile from './Profile';
// import Footer from './Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import Particles from 'react-particles-js';

import './Home.css';

 const Home = () => {
  return (
    <div className='home-container'>
      {/* <Particles 
      params= {{
        particles:{
          number: {
            value: 30,
            density: {
              enable: true,
            value_area: 900
            }
          }
        }
      }}/> */}
      
      <Navbar/>
      <Profile />
      {/* <Footer/> */}
    </div>
  )
}
export default Home;