import React from 'react'
import { useState, useEffect } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case ' SET_TODO': {
      return action.payload
    }
    case 'CHANGE_TODO_STATUS': {
      return { ...state, completed: !state.completed }
    }
    case 'CHANGE_TODO_TITLE': {
      return { ...state, title: action.payload }
    }
    default: {
      return state
    }
  }
}
const initialState = { userId: null, id: null, title: '',complete:false }

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // let [counter, setCounter] = useState({ name: 'hello lala', age: '35' })

  // const onClickHandler = () => {
    // if (counter % 2) {
    //   setCounter(counter + 10)
    // } else {
    //   setCounter(counter + 1)
    // }
    // setCounter((prevState) => ({
    //   ...prevState,
    //   age: prevState.age + 1,
    // }))
  }
  useEffect(() => {
    // if ([2, 4, 6].some((el) => el === counter)) {
      console.log(counter, 'lalala')
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {console.log(json) 
        dispatch({type:"SET_TODO",payload:json})}
    
  , [counter])
  const onClickHandler=()=> setCounter((prtev) => prtev+1) 
    const onStatusHandler=()=>dispatch ({type:'CHANGE_TODO_STATUS'})
    const onTitleHandler=()=>dispatch({type:"CHANGE_TODO_TITLE",payload:Math.random()})
  
   
  return (
    <div class="App">
      <button onClick={onClickHandler}>inc</button>
      <button onClick={onStatusHandler}>change todo status</button>
      <button onClick={onTitleHandler}>change todo title</button>
       {/* <h1> counter value:{counter}</h1>  */}
      <h1>{counter.age}</h1>
      <h1> {counter.name}</h1>
      <h1> {state.id}</h1>
      <h1> {state.title}</h1>
      <h1> {state.completed.toString()}</h1>
    </div>
  )
}
