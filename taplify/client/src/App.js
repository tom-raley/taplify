import React, { useState, useEffect } from 'react';
import beerService from './services/beerService';

function App() {
    const [beers, setbeers] = useState(null);

    useEffect(() => {
      if(!beers) {
        getBeers();
      }
    })
    const getBeers = async () => {
      let res = await beerService.getData();
      setbeers(res);
    }

    const renderBeer = beer => {
      return (
        <li key={beer._id} className="list__item product">
          <h3 className="product__name">{beer.name}</h3>
          <p className="product__description">{beer.style}</p>
        </li> 
      );
    };
    return (
       <div className="App">
          <ul className="list">
            {(beers && beers.length > 0) ? (
              beers.map(beer => renderBeer(beer))
            ) : (
                <p>No products found</p>
              )}
          </ul>
        </div>
    );
}

export default App;
