import React, { Component } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import fetchPokemons from "../utils/fetchPokemon";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      bag: [],
      data: [],
    };
    this.selectType = this.selectType.bind(this);
    this.updateBag = this.updateBag.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }

/*
Utiliser la function du prof
 */
  componentDidMount() {
    fetchPokemons()
        // .then permet de récupérer la promise
        .then(
            results => {
              this.setState({
                data : results
              })
            }
        )
        // .catch permet de récupérer les errors si la requete n'aboutie pas.
        .catch(
            errors => {
              console.error(errors)
            }
        )
  }

  selectType(t) {
    const { selected } = this.state;

    this.setState({
      selected: selected === t ? null : t,
    });
  }

  updateBag(pokemonObject){
      const newPokemon = {...pokemonObject};
      newPokemon.trainedId = Date.now();

      //const newPokemon = {...pokemonObject, trainedId: Date.now()} Autre facon de l'ecrire
      console.log("Nouveau pokemon", newPokemon)
          if (this.state.bag){
              this.setState({
                      bag : [...this.state.bag, newPokemon]

                  }
              )
          }else{
              this.setState({
                      bag : [newPokemon]
                  }
              )
          }
  }

  releasePokemon(pokemonReleased){

      this.setState({
          bag: this.state.bag.filter(item => item.trainedId !== pokemonReleased)
      })
  }

  render() {
    const { data } = this.state;

    const { selected } = this.state;
    const bag = this.state.bag ? this.state.bag : [];

    const deepTypes = data.map(p => p.types.map(t => t.type.name));
    const flatTypes = deepTypes.flat();
    const uniqueTypes = [...new Set(flatTypes)];

    const pokemonsToDisplay = selected
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selected),
        )
      : data;

    return (
      <div className="App">
        <Trainer name="Clémence" address="Bourgpalette" bag={bag} action={this.releasePokemon} />
        <Filters
          types={uniqueTypes}
          active={selected}
          filter={this.selectType}
        />
        <PokemonList pokemons={pokemonsToDisplay} action={this.updateBag} />
      </div>
    );
  }
}

export default App;