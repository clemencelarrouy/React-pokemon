import React, {PureComponent} from 'react';

class TrainedPokemon extends PureComponent {
  constructor() {
    super();

    this.state = {
      xp: 0,
      idInterval : null
    };

    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    
    this.setState(previous => ({ 
        xp : previous.xp + 10 
    }))
  }

  componentDidMount() {
    const idInterval = setInterval(
       this.gainExp , 1000
    )
    this.setState({
      idInterval
    })
  } 

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