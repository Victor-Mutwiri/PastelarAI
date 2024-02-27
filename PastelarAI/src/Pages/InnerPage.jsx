
import PropTypes from 'prop-types';
import Ingredients from '../components/ingredients/ingredients';
import Procedure from '../components/procedure/procedure';
import './InnerPage.css';

const InnerPage = ({ page, onCloseBook, pageNumber }) => {
  return (
    <div className={`inner-page ${page}`}>
      {pageNumber === 1 && <Ingredients toggleSections={onCloseBook} />}
      {pageNumber === 2 && <Procedure toggleSections={onCloseBook}/>}
      {/* <button onClick={onCloseBook}>Close Book</button> */}
    </div>
  );
};

InnerPage.propTypes = {
  page: PropTypes.oneOf(['left-page', 'right-page']).isRequired,
  onCloseBook: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired
};

export default InnerPage;
