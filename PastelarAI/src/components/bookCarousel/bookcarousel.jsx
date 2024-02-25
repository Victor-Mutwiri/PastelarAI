import { Counter } from '../counter/counter';
import { Ingredients } from '../ingredients/ingredients';
import ToggleButton from '../toggle/toggle';
import './bookcarousel.css'

export const Bookcarousel = () => {
  return (
    <div className='categories'>
        <section>
            <Ingredients/>
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
                <button>Annuler</button>
                <i className='bx bxs-right-arrow'/>
            </section>
        </section>
    </div>
  )
}
