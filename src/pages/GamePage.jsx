import React from 'react';
import GameScore from '../components/GameScore';
import CountDownTimer from '../components/CountDownTimer';
import RandomState from '../components/RandomState';
import StatesContainer from '../components/StatesContainer';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;

const GamePage = () => {
  return (
    <div>
        <StyledContainer>
            <GameScore />
            <CountDownTimer />
        </StyledContainer>
        <RandomState />
        <StatesContainer />
    </div>
  );
}

export default GamePage;