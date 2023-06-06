import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates, selectRandomState } from '../redux/usaStatesState';

const RandomState = () => {
    const dispatch = useDispatch();
    const states = useSelector(state => state.usaStates.states);
    const randomState = useSelector((state) => state.usaStates.randomState);

    useEffect(() => {
      dispatch(getStates());
    },[dispatch]);

    useEffect(() => {
      dispatch(selectRandomState());
    }, [states, dispatch]);
  
    return (
            <>
            { randomState !== null ? 
              <div>
                { states.length > 0 ? <h1>{randomState.name}</h1> : 'You WON!' }
              </div>
                : 'LOADING' 
              }
            </>
      );
};

export default RandomState;