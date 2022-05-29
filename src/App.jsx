import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {...state, count: state.count + 1};

    case 'DECREMENT': 
      return {...state, count: state.count - 1};

    default:
      return state;
  };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span onClick={() => dispatch({type: 'INCREMENT'})}>
        <b>+</b>
      </span>

      <span>{state.count}</span>

      <span onClick={() => dispatch({type: 'DECREMENT'})}>
        <b> - </b>
      </span>
    </div>
  )
}

export default App;