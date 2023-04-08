import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import './styles.scss';


const data = [ {
               label:'HOME',
               to:'/'
               },
               {
                label:'ABOUT ME',
                to:'/about'
                },
                {
                    label:'SKILLS',
                    to:'/skills'
                },
                {
                    label:'RESUME',
                    to:'/resume'
                },
                {
                    label:'PORTFOLIO',
                    to:'/portfolio'
                },
                {
                    label:'CONTACT',
                    to:'/contact'
                },
            ];
               


const Navbar = ()=>{

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = ()=>{
        setToggleIcon(!toggleIcon);
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__container__logo">
                    <FaReact size={40} />
                    </Link>
                </div>
                <ul className={`navbar__menu ${toggleIcon? 'active': ''}`}>
                    {
                        data.map( (element, index)=> (
                            <li key={index} className="navbar__menu__item">
                                <Link className="navbar__menu__item__links" to={element.to}>
                                    {element.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
                <div className="navbar__menuicon" onClick={handleToggleIcon}>
                    {
                        toggleIcon? <HiX size={30} /> : <FaBars size={30} /> 
                    }
                </div> 
            </div>
        </>
    );
}
export default Navbar;