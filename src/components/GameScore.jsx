import React, { useState } from 'react';

const GameScore = () => {
    const [score, setScore] = useState(0);
    return (
        <div>Score { score } </div>
    );
}

export default GameScore;