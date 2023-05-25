import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import uncleSam from '../images/uncle_sam.jpeg';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

const StyledImg = styled.img`
    width: 280px;
    height: 280px;
    margin: 1.8rem 0;
`;

const StyledBtn = styled.div`
    background-color: black;
    border: solid white 1.5px;
    cursor: pointer;
    margin: 1rem auto 0 auto;
    max-width: 100px;
    transition: transform .4s;
    &:hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1); 
  }
`;

const StyledParagraph = styled.p`
    border-right: solid white 1.5px;
    color: white;
    line-height: 0;
    text-align: center;
    textDecoration: 'none';
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const HomePage = () => {
  return (
    <>
    <StyledContainer>
      <StyledImg src={uncleSam} alt="Uncle Sam" srcset="" />
    </StyledContainer>
    <StyledLink to={"/game"}>
      <StyledBtn>
        <StyledParagraph>
          Let's Play
        </StyledParagraph>
      </StyledBtn>
    </StyledLink>
    </>
  );
}

export default HomePage;