import React from 'react';

function Pokemon(props) {
    const {
      name,
      weight,
      actionB,
      sprites: { front_default: src }, // pourquoi sprites pour definir l'image
    } = props;

    return (
      <li className="Pokemon bg-orange-50" onClick={actionB}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  
}

export default React.memo(Pokemon);
