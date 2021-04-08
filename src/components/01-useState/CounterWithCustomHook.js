import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter With Hook: {state} </h1>
            <hr />

            <button onClick={increment} className="btn btn-primary mx-2">+1</button>
            <button onClick={reset} className="btn btn-success">Reset</button>
            <button onClick={decrement} className="btn btn-danger mx-2">-1</button>
        </>
    )
}
