import React, { PureComponent } from 'react';

function Header() {
    return (
      <header className='bg-sky-600'> <h1 className='uppercase text-center py-6 bold  text-3xl text-yellow-300'> Pokemon, catch them all !</h1></header>
    );
  
}

export default React.memo(Header);