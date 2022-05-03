import React, { Component } from 'react';
import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, bag, action } = this.props;
    console.log(bag)
    const instances = bag.map(item => {
      return (
        <TrainedPokemon
          key={item.trainedId}
          name={item.name}
          weight={item.weight}
          src={item.sprites.back_default}
          action2 = {()=>action(item.trainedId)}
        />
      );
    });

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <ul className="bag">{instances}</ul>
      </div>
    );
  }
}

export default Trainer;