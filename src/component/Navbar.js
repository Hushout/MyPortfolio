import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';
import Social from './Social'


function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    <Logo />
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    {/* sert à supprimer le navbar interactif */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <div className='hiddeniftoobig'>
                        <Social /> 
                        </div>
                        
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
