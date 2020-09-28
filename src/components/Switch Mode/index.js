import React from 'react';
import "./style.css";

function SwitchMode(props) {
    const { setIsDarkMode, isDarkMode } = props;

    const handleChange = (e) => {
        const value = (e.target.name = "checkbox"
            ? e.target.checked
            : e.target.value);
        setIsDarkMode(value);
    };

    return (
        <div className="switch-mode">
            <input type="checkbox" className="btn-toggle" onChange={handleChange} checked={isDarkMode} />
        </div>
    )
}

export default SwitchMode
