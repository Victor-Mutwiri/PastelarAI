import PropTypes from 'prop-types';
import './CoverPage.css';
import ToggleButton from './toggle/toggle';
import Counter from './counter/counter';

const CoverPage = ({ onNextPage }) => {
  return (
    <div className="cover-page">
      <section className='elements'>
        <select name="" className="options">
            <option value="">Categorize</option>
            <option value="">Pateseti Biscuits</option>
            <option value="">Garnitures Chaudes</option>
            <option value="">Garnitures froides</option>
        </select>
        <input type="text" placeholder="Nom" className="Nom"/>
      </section>
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
            <button onClick={onNextPage}><i className='bx bxs-right-arrow'/></button>
        </section>
    </div>
  );
};

CoverPage.propTypes = {
    onNextPage: PropTypes.func.isRequired
};

export default CoverPage;