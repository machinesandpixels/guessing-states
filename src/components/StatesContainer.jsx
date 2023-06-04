import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates } from '../redux/usaStatesState';
import styled from 'styled-components';

const StyledSection = styled.section`
    border-radius: 2px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin: 0 auto;
    max-width: 800px;
    padding: 3rem;
    text-align: center;
`;
const StyledBtn = styled.div`
    background-color: black;
    border: solid white 1.5px;
    cursor: pointer;
    margin: 7px;
    max-width: 150px;
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
`;

const StatesContainer = () => {
    const dispatch = useDispatch();
    const states = useSelector(state => state.usaStates.states);

    useEffect( () => {
        dispatch(getStates());
    },[dispatch]);
  
  return (
    <StyledSection>
        { states.map(({id, name}) => {
          return<StyledBtn key={id}>
                  <StyledParagraph> {name} </StyledParagraph>
                </StyledBtn>
        }) }
    </StyledSection>
  );
}

export default StatesContainer;