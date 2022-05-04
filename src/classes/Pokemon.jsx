import React, { Component } from 'react';

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      idInterval: null,
    };
   
  }

  render() {
    const {
      name,
      weight,
      actionB,
      sprites: { front_default: src }, // pourquoi sprites pour definir l'image
    } = this.props;

    return (
      <li className="Pokemon" onClick={actionB}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
