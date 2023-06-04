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
        if (states.length > 0 && randomState === null) {
          dispatch(selectRandomState());
        }
      }, [states, randomState, dispatch]);

    console.log(randomState);

    return (
            <>
            { randomState !== null ? 
              <div>
                <h1>{randomState.name}</h1>
              </div>
                : 'LOADING' 
              }
            </>
      );
};

export default RandomState;