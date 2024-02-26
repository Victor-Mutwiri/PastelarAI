import './ingredients.css'

export const Ingredients = () => {
  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      <section className="input">
        <i className='bx bx-search'/>
        <input type="text" />
      </section>
      <section className="table">
        <table className='Ingredients-table'>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Poids</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lait entier</td>
              <td>535g</td>
            </tr>
            <tr>
              <td>Eau</td>
              <td>535g</td>
            </tr>
            <tr>
              <td>Sucre semoule</td>
              <td>45g</td>
            </tr>
            <tr>
              <td>Sel fin</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Beurre doux</td>
              <td>470g</td>
            </tr>
            <tr>
              <td>Farine T45 Gruau</td>
              <td>290g</td>
            </tr>
            <tr>
              <td>Farine T55</td>
              <td>285g</td>
            </tr>
            <tr>
              <td>Oeufs entiers</td>
              <td>950g</td>
            </tr>
            <tr>
              <td>Ingredient ajoute</td>
              <td>950g</td>
            </tr>
          </tbody>
        </table>
        <table className='Ingredients-Cout'>
          <thead>
            <tr>
              <th>Cout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
            <tr>
              <td>0.25 € <i className='bx bx-x'/></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='ingredients-bottom'>
        <i className='bx bxs-left-arrow'/>
        <div className='kg-price'>
          <span>Cout au kg</span>
          <span>3,56€</span>
        </div>
      </section>
    </div>
  )
}
