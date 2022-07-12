import React from 'react';
// CounterContainer에서 프롭스로 받아옴
const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value))
    }
    return (
        <div>
            <h2>{number}</h2>     
            <div>
                <input type="number" value={diff}
                min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;     