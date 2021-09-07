import React, { useState } from 'react';

const reduce = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    default:
      return state;
  }
};

const useReducer = (reduce, defaultValue) => {
  const [state, setState] = useState(defaultValue);
  const dispatch = (action) => {
    const newState = reduce(state, action);
    setState(newState);
  };
  return [state, dispatch];
};

const CustomHook = (props) => {
  const [state, dispatch] = useReducer(reduce, []);

  const handleChange = (e) => {
    dispatch({ type: 'ADD', value: e.target.value });
  };

  return (
    <>
      <input onChange={handleChange}></input>
      {state.map((p, index) => (
        <div key={index}>{p}</div>
      ))}
    </>
  );
};

export default CustomHook;
