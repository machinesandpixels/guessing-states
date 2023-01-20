import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates } from '../redux/usaStatesState';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    background-color: black;
    color: antiquewhite;
    margin: 0 auto;
    padding: 2rem;
`;

const StyledParagraph = styled.p`
    border-left: solid white 3px;
    border-right: solid white 3px;
    padding: .5rem;
`;

const StatesContainer = () => {
    const dispatch = useDispatch();
    const states = useSelector(state => state.usaStates.states);

    useEffect( () => {
        dispatch(getStates());
    },[dispatch]);
    console.log(states);
  return (
    <StyledDiv>
        { states.map( v => {
            return <StyledParagraph key={v.id}> {v.name} </StyledParagraph>
        }) }
    </StyledDiv>
  )
}

export default StatesContainer;