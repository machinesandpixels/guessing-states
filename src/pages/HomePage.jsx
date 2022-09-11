import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates } from '../redux/usaStatesState';

const HomePage = () => {
  const dispatch = useDispatch();
  const states = useSelector(state => state.usaStates.states);

  useEffect( () => {
    dispatch(getStates());
  },[dispatch]);

  return (
  
    <div className=''>
      HomePage
      { states.map( v => {
        return <p key={v.id}> {v.title} </p>
      }) }
    </div>
  )
}

export default HomePage;