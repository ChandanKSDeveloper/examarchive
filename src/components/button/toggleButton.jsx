import React, { useEffect, useState } from "react";
import '../../App.css';
import {AiOutlineSun, AiOutlineMoon} from 'react-icons/ai'

function ToggleButton() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? 'dark' : 'light'));
  };

  return (
    <div>
        <input type="checkbox" checked={theme === 'dark'} id="darkmode-toggle"  onClick={toggleTheme}/>
        <label htmlFor="darkmode-toggle" className="modeLabel"></label>
    </div>
    
  );
}

export default ToggleButton;
