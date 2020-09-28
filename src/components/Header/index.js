import React from 'react';
import './style.css';
import logo from './../../assets/image/logo.svg'
import SwitchMode from '../Switch Mode';

function Header(props) {
    const { setIsDarkMode, isDarkMode } = props;
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1>My Typing Speed Test</h1>
            <SwitchMode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </div>
    )
}

export default Header;
