import { Counter } from '../counter/counter';
import ToggleButton from '../toggle/toggle';
import './bookcarousel.css'

export const Bookcarousel = () => {
  return (
    <div className="book">
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
            <select name="" id="">
                <option value="">Unite</option>
                <option value="">Unite</option>
            </select>
        </section>
        <section className="notes">
            <h4>Notes</h4>
            <input type="text" />
        </section>
        <section>
            <button>Annuler</button>
            <i className='bx bxs-right-arrow'/>
        </section>
    </div>
  )
}
