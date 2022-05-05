import React, { PureComponent } from 'react';
import TrainedPokemon from './TrainedPokemon';

class Trainer extends React.PureComponent {
  render() {
    const { name, address, bag , action } = this.props;

    const instances = bag.map(item => {
      return (
        <TrainedPokemon
          key={item.id}
          name={item.name}
          weight={item.weight}
          src={item.sprites.back_default}
          actionB = {()=>action(item.trainedId)}
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