import React, { Component } from 'react';

class Header extends Component {
  render() {
  
    return (
      <header className='bg-sky-600'> <h1 className='uppercase text-center py-6 mb-14 lg:mb-20 text-3xl text-yellow-300'> Pokemon, catch them all !</h1></header>
    );
  }
}

export default Header;