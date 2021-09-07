import React, { useState, useEffect } from 'react';

const TestState = (props) => {
  const [state, setState] = useState(0);

  console.log(state);

  useEffect(() => {
    [...Array(10)].forEach(() => setState(state + 1));
  }, []);

  return <></>;
};

export default TestState;
