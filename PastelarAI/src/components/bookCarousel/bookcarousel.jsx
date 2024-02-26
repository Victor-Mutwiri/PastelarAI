import { useState } from 'react';
import { Counter } from '../counter/counter';
import { Ingredients } from '../ingredients/ingredients';
import { Procedure } from '../procedure/procedure';
import ToggleButton from '../toggle/toggle';
import './bookcarousel.css';

export const Bookcarousel = () => {
  const [showProcedure, setShowProcedure] = useState(false);

  const toggleProcedure = () => {
    setShowProcedure((prevShowProcedure) => !prevShowProcedure);
  };

  const toggleSections = () => {
    setShowProcedure((prevShowProcedure) => !prevShowProcedure);
  };

  return (
    <div className='categories'>
      <section className='one' style={{ display: showProcedure ? 'block' : 'none' }}>
        <Ingredients toggleSections={toggleSections}/>
      </section>
      <div className='two'>
          <section className={`procedure ${showProcedure ? 'open' : ''}`}>
            <Procedure className="show-procedure"/>
          </section>
          <section className='book'>
            <select name="" className="options">
              <option value="">Categorize</option>
              <option value="">Pateseti Biscuits</option>
              <option value="">Garnitures Chaudes</option>
              <option value="">Garnitures froides</option>
            </select>
            <input type="text" placeholder="Nom" className="Nom"/>
            <section className='toggle'>
              <ToggleButton/>
              <span>Recette utilisee dans d'autres recettes</span>
            </section>
            <h4>Conservation</h4>
            <section className="conservation">
              <Counter/>
              <select name="" className="options">
                <option value="">Unite</option>
                <option value="">Unite</option>
              </select>
            </section>
            <section className="notes">
              <h5>Notes</h5>
              <input type="text" />
            </section>
            <section className='bottom'>
              <button >Annuler</button>
              <button onClick={toggleProcedure}><i className='bx bxs-right-arrow'/></button>
            </section>
          </section>
      </div>
    </div>
  );
};
