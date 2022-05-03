import React, { Component } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import { url } from "../utils/Constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      bag: [],
      data: [],
    };
    this.selectType = this.selectType.bind(this);
  }


  async componentDidMount() {
    fetch(url)
        .then(res => res.json())
        .then(result => {
          this.setState({
            data: result
          });
        });
}

  selectType(t) {
    const { selected } = this.state;

    this.setState({
      selected: selected === t ? null : t,
    });
  }

  render() {
    const { data } = this.state;
    console.log('premier', data);
    //console.log('DATA', data.results);
    const { selected } = this.state;
    const bag = [];
    

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
        <Trainer name="Clémence" address="Bourgpalette" bag={bag} />
        <Filters
          types={uniqueTypes}
          active={selected}
          filter={this.selectType}
        />
        <PokemonList pokemons={pokemonsToDisplay} />
      </div>
    );
  }
}

export default App;