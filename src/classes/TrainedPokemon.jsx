import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      xp: 0,
      idInterval : null
    };

    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    const { xp } = this.state;
    this.setState({
      xp: xp + 10,
    });
  }

  componentDidMount() {
    const idInterval = setInterval(
        () => {
          this.setState({
            xp : this.state.xp + 10
          })
        }, 500
    )
    this.setState({
      idInterval
    })
  } // pourquoi utiliser componentdidmount sachant que ce n'est pas une action qu'on fait qu'une fois 

  componentWillUnmount() {
    clearInterval(this.state.idInterval)
  }

  render() {
    const { name, src , actionB } = this.props;
    const { xp } = this.state;

    return (
      <li
        className="TrainedPokemon"
        onClick={actionB}
        onMouseMove={this.gainExp}
      >
        <div className="name">{name}</div>
        <div className="exp">{xp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;