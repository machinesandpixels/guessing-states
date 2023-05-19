import React from 'react';
import styled from 'styled-components';
import uncleSam from '../images/uncle_sam.jpeg';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`;

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledImg src={uncleSam} alt="Uncle Sam" srcset="" />
    </StyledContainer>
  );
}

export default HomePage;