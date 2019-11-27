import React, { useState, useEffect } from 'react';
import beerService from '../services/beerService';

function Beer() {
  const[beers, setbeers] = useState(null);

  useEffect(() => {
    if (!beers) {
      getBeers();
    }
  })

  const getBeers = async () => {
    let res = await beerService.getData();
    setbeers(res);
  }

  if(beers && beers.length > 0) {
    return(
     beers.map((beer, ind) => (
      <div key={ind}>
        <h1>{beer.name}</h1>
        <h2>{beer.style}</h2>
        <p>{beer.description}</p>
      </div>
    )))
  } else {
    return (
      <p>No beers on right now!</p>
    )
  };
}

export default Beer
