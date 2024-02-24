import { useState } from 'react';
import './counter.css';

export const Counter = () => {
    const [number, setNumber] = useState(1);
    const incrementNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
    };

  // Function to handle decrementing the number
     const decrementNumber = () => {
        if (number > 1) {
        setNumber(prevNumber => prevNumber - 1);
        }
    };
  return (
    <section className="counter">
        <div className='arrows'>
            <i className='bx bx-up-arrow' onClick={incrementNumber} /> {/* Call incrementNumber function on click */}
            <i className='bx bx-down-arrow' onClick={decrementNumber} /> {/* Call decrementNumber function on click */}
        </div>
        <span>{number}</span> {/* Display the number */}
    </section>
  )
}
