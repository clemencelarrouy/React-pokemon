
import React from 'react';
import Pokemon from './Pokemon';

function PokemonList(props) {
    const { pokemons , action } = props;

    const instances = pokemons.map(item => {
      return <Pokemon key={item.id} actionB={()=>action(item)} {...item} />;
    });

    return <ul className="PokemonList list">{instances}</ul>;
  
}

export default React.memo(PokemonList);
