import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className='header-container'>
      	<h1 className='header-title'><Link to={'/'} className='header-link'>Asheber Arlain</Link></h1>
      	<nav className='header-nav'>
      		<ul className='nav-items'>
      			<Link to={'/about-me'} className='nav-item'><li>About Me</li></Link>
      			<Link to={'/projects'} className='nav-item'><li>Projects</li></Link>
      		</ul>
      	</nav> 
      </div>
    );
}

export default Header;
