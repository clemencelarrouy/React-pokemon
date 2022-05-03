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
            xp : this.state.xp + 100
          })
        }, 1000
    )
    this.setState({
      idInterval
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.idInterval)
  }

  render() {
    const { name, src, action2 } = this.props;
    const { xp } = this.state;

    return (
      <li
        className="TrainedPokemon"
        onClick={action2}
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