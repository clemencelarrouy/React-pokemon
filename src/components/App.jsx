import React, { PureComponent } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import fetchPokemons from "../utils/fetchPokemon";
import Header from './Header';
import DotLoader from 'react-spinners/DotLoader';

class App extends PureComponent {
  constructor(props) {
    super(props);
// pourquoi des fois ça peut être defini comme tableau et non null
    this.state = {
      data: [],
      selected: null,
      bag: [], 
      loading : true
    };
    this.selectType = this.selectType.bind(this);
    this.freePokemon = this.freePokemon.bind(this);
    this.updateBag = this.updateBag.bind(this);
  }


  componentDidMount() {
    fetchPokemons()
        .then(
            data => {
              this.setState({
                data, 
                loading : false
              })
            }
        )
  }

  selectType(t) {
    const { selected } = this.state;

    this.setState(prevState => ({ selected : prevState.selected === t ? null : t }));
  
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
    const loading = this.state.loading;
    
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
       { loading ? ( <div className='block mt-20 mx-auto'> <DotLoader /> </div> ) :( <PokemonList pokemons={pokemonsToDisplay} action={this.updateBag} /> )}
      </div>
    );
  }
}

export default App;


// formulaire : rechercher un pokemon 
// formulaire : rentrer son prenom avec un trop court 
