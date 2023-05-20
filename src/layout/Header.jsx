import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  cursor: pointer;
  color: black;
  font-size: 2.5rem;
  margin-top: 3rem;
  text-align: center;
  transition: 0.5s all ease-out;
  letter-spacing: .2rem;

  &:hover {
    color: #777777;
  }
`;

const Header = () => {
  return (
    <StyledH1>Guessing States</StyledH1>
  )
}

export default Header;