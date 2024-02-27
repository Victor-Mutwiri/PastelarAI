import { useState } from 'react';
import './App.css';
import CoverPage from './Pages/CoverPage';
import InnerPage from './Pages/InnerPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBook = () => {
    setIsOpen(true);
  };

  const handleCloseBook = () => {
    setIsOpen(false);
  };

  return (
    <div className="book-wrapper">
      <div className="book-container">
        {!isOpen && <CoverPage onNextPage={handleOpenBook} />}
        {isOpen && (
          <>
            <InnerPage page="left-page" onCloseBook={handleCloseBook} pageNumber={1} />
            <InnerPage page="right-page" onCloseBook={handleCloseBook} pageNumber={2} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
