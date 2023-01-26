import React from 'react';
import CountDownTimer from '../components/CountDownTimer';
import StatesContainer from '../components/StatesContainer';

const HomePage = () => {
  return (
    <div className='home'>
      <CountDownTimer />
      <StatesContainer />
    </div>
  );
}

export default HomePage;