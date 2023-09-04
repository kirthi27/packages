import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div className='navbar1'>
      <div className='nav-links'><h3>TAMILNADU TOURISM</h3></div>
      <div>      
        
        <ul className='links'>
        <Link to="/Home" className='Home'style={{color:'antiquewhite'}}> <li>HOME</li> </Link>&nbsp;
        <Link to="/places" className='places' style={{color:'antiquewhite'}}> <li> PLACE TO VISIT</li></Link>&nbsp;
        <Link to="/Bestplace" className='Bestplace' style={{color:'antiquewhite'}}><li>BEST TIME TO VISIT</li></Link>&nbsp;
        <Link to="/packages" className='packages' style={{color:'antiquewhite'}}><li>PACKAGES</li></Link>&nbsp;
        <Link to="/food" className='food' style={{color:'antiquewhite'}}><li>FOOD</li></Link>
        </ul>
     </div>
    </div>
      
  )
}

export default navbar
