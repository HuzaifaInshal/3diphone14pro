import React from 'react';
import animatedLogo from '../assets/logo-animated.gif';

const Loader = () => {
  return (
    <div className='loader'>
        <img  className='loader2' src={animatedLogo} alt="Apple Loader" />
    </div>
  )
}

export default Loader