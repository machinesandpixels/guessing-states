import React from 'react';
import { useSelector } from 'react-redux';

const GameScore = () => {
    const score = useSelector(state => state.usaStates.score);

    return (
        <div>Score { score } </div>
    );
}

export default GameScore;