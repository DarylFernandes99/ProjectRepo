import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { links } from './Data'
import logo from '../../media/logo.svg';
import {FaMoon, FaSun, FaAlignCenter, FaArrowUp} from 'react-icons/fa'


const Navbar = (props) => {
    const[navToggle,setNavToggle] = useState(false);
    const[darkMode, setDarkMode] = useState(window.localStorage.getItem("dark-mode") === 'true' ? true : false);
    
    const handleToggle = () => {
        setDarkMode(!darkMode);
        if(!darkMode){
            props.setIsDarkMode();
            window.localStorage.setItem("dark-mode", !darkMode);
            document.getElementById("navbar-mobile").classList.add = "dark-nav";
        }else{
            props.setIsDarkMode();
            window.localStorage.setItem("dark-mode", !darkMode);
            document.getElementById("navbar-mobile").classList.remove = "dark-nav";
        }
    }

    return( 
        <>
            <nav className={darkMode ? "navbar-custom dark-nav" : "navbar-custom"}>
                <ul>
                    <li className='logo'>
                        <img src={logo} alt="Project Repo" /> 
                    </li>
                    {links.map((i) => {
                        const{id, url, text} = i;

                        return (<Link to={url} key={id} className='link-custom'>
                            <li> {text}</li>
                        </Link>)
                    })}
                    <ul className='navbar-nav ml-auto'>
                        <li className='dark-mode-toggle'>
                            <FaSun />
                            <label className="switch">
                                <input checked={darkMode} type="checkbox" onChange={handleToggle}/>
                                <span className="slider round"></span>
                            </label>
                            <FaMoon />
                        </li>
                    </ul>
                </ul>
            </nav>

            <nav id='navbar-mobile' name='navbar-mobile'  className={darkMode ? (navToggle ? 'navbar-mobile-exapnded dark-nav' : 'navbar-mobile dark-nav') : (navToggle ? 'navbar-mobile-exapnded' : 'navbar-mobile')}>
                    <ul>
                        <li className='mobile-logo'>
                            <img src={logo} alt="Project Repo" /> 
                        </li>
                        
                        <ul className='navbar-nav ml-auto'>
                            <li>
                                <button className={darkMode ? 'mobile-btn dark-nav' : 'mobile-btn' } onClick={() => setNavToggle(!navToggle)}> {navToggle ? <FaArrowUp /> : <FaAlignCenter/> }  </button>
                            </li>
                        </ul>
                    </ul>
                    {navToggle ? 
                        <ul className='navbar-expanded'> 
                            {links.map((i) => {
                                const{id, url, text} = i;

                                return (<Link key={id} to={url} className='mobile-link'>
                                    <li className=''> {text}</li>
                                </Link>)
                            })}
                            <li className='dark-mode-toggle'>
                                <FaSun />
                                <label className="switch">
                                    <input checked={darkMode} type="checkbox" onChange={handleToggle}/>
                                    <span className="slider round"></span>
                                </label>
                                <FaMoon />
                            </li>
                        </ul> : 
                        ``
                    }
                    
            </nav>
        </>
        
    );
}

export default Navbar;