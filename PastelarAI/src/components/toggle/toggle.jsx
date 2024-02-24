import { useState } from 'react';
import './toggle.css';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <button 
      onClick={handleToggle} 
      className={`toggle-button ${isToggled ? 'active' : ''}`} // Add 'active' class dynamically
    >
      <div className="slider"></div>
    </button>
  );
};

export default ToggleButton;
