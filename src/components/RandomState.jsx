import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates, selectRandomState } from '../redux/usaStatesState';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  transition: margin-top .2s, color .5s;
  color: ${props => (props.$danger ? "red" : "black")};
  // transition: width 2s;
  // width: ${props => props.animate ? "100px" : "0px"};
  margin-top: ${props => props.animate ? "10px" : "0px"};
`;

const RandomState = () => {
    const dispatch = useDispatch();
    const states = useSelector(state => state.usaStates.states);
    const randomState = useSelector((state) => state.usaStates.randomState);
    const stateSelection = useSelector(state => state.usaStates.stateSelection);

    useEffect(() => {
      dispatch(getStates());
    },[dispatch]);

    useEffect(() => {
      dispatch(selectRandomState());
    }, [states, dispatch]);
  
    return (
            <>
            { randomState !== null ? 
              <StyledDiv $danger={stateSelection} animate={stateSelection}>
                { states.length > 0 ? <h1>{randomState.name}</h1> : 'You WON!' }
              </StyledDiv>
                : 'LOADING' 
              }
            </>
      );
};

export default RandomState;