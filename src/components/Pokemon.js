import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  
  const [pokemones, setPokemones] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
    .then(response => response.json())
    .then(response=>setPokemones(response.results))
  }, []);
  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }
  return (
    <div>
      <button onClick={handleClick}>Fetch Pokemon</button>
      {
        isClicked&&(
          pokemones.length > 0 && pokemones.map((pokemon,idx)=>{
            return (<div key={idx}>{pokemon.name}</div>)
          })
        )
        
      }
    </div>
  );
}

export default Pokemon;
