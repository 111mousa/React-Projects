import { React, useState, useEffect , useContext } from 'react'
import ComponentB from './ComponentB';
import { CountContext } from '../App';

const ComponentA = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={()=> countContext.countDispatch("increment")}>Increment</button>
            <button onClick={()=> countContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={()=> countContext.countDispatch("reset")}>Reset</button>
        </div>
    )
}

export default ComponentA;