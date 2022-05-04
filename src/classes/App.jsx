import React, { Component } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import fetchPokemons from "../utils/fetchPokemon";
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
// pourquoi des fois ça peut être defini comme tableau et non null
    this.state = {
      data: [],
      selected: null,
      bag: [], 
    };
    this.selectType = this.selectType.bind(this);
    this.freePokemon = this.freePokemon.bind(this);
    this.updateBag = this.updateBag.bind(this);
  }


  componentDidMount() {
    fetchPokemons()
        .then(
            results => {
              this.setState({
                data : results
              })
            }
        )
  }

  selectType(t) {
    const { selected } = this.state;

    this.setState({
      selected: selected === t ? null : t,
    });
  }

  freePokemon(pokemonFreedom){

    this.setState({
        bag: this.state.bag.filter(item => item.trainedId !== pokemonFreedom)
    })
  }

  updateBag(pokemonObject){
    const newPokemon = {...pokemonObject}; // pourquoi on doit étaler le pokemon
    newPokemon.trainedId = Date.now();

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

  render() {
    const { data } = this.state;
    const { selected } = this.state;
    const bag = this.state.bag; // pourquoi bag n'est pas entre crochet
    
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
        < Header />
        <Trainer name="Clémence" address="Bourgpalette" bag={bag} action={this.freePokemon} />
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