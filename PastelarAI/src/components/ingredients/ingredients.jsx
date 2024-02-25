

export const Ingredients = () => {
  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      <section className="input">
        <i className='bx bx-search'/>
        <input type="text" />
      </section>
      <section>
        <table>
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
      </section>
    </div>
  )
}
