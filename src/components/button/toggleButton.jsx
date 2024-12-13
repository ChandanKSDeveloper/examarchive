import React, { useEffect, useState } from "react";
import '../../App.css';

function ToggleButton() {

  // This checks if the browser or system is set to dark mode.
  // if the browser is set to dark mode, it will automatically apply dark mode, and localStorage will only come into play if the user overrides the setting by clicking the toggle button.
  const browserTheme = window.matchMedia("(prefers-color-scheme : dark)").matches;


  const [theme, setTheme] = useState(localStorage.getItem('theme') || (browserTheme ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? 'dark' : 'light'));
  };

  return (
    <div>
        <input type="checkbox" checked={theme === 'dark'} id="darkmode-toggle"  onChange={toggleTheme}/>
        <label htmlFor="darkmode-toggle" className="modeLabel"></label>
    </div>
    
  );
}

export default ToggleButton;
