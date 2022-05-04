import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons , action } = this.props;

    const instances = pokemons.map(item => {
      return <Pokemon key={item.id} actionB={()=>action(item)} {...item} />;
    });

    return <ul className="PokemonList list">{instances}</ul>;
  }
}

export default PokemonList;