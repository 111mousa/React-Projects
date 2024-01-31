import {React,useState} from 'react'

const useCount = (initialState,value) => {
    const [count,setCount] = useState(initialState)
    const increment = ()=>{
        setCount(count + value)
    }
    const decrement = ()=>{
        setCount(count - value)
    }
    const reset = ()=>{
        setCount(0)
    }

    return [count,increment,decrement,reset];
}

export default useCount
