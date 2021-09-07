import React, { useState, useEffect } from 'react';

const Effect = (props) => {
  useEffect(() => {
    console.log('start', props.id);
    return () => {
      console.log('clean', props.id);
    };
  });
  return <div>{props.id}</div>;
};

const Effect2 = (props) => {
  useEffect(() => {
    console.log('start_2', props.id);
    return () => {
      console.log('clean_2', props.id);
    };
  }, []);
  return <div>{props.id}</div>;
};

const TestEffect = (props) => {
  const [state, setState] = useState(0);
  const [mount, setMount] = useState(false);
  return (
    <>
      <button onClick={() => setState(1)}>Button 1</button>
      <button onClick={() => setState(2)}>Button 2</button>
      <button onClick={() => setState(3)}>Button 3</button>
      <Effect id={state} />
      <button onClick={() => setMount(!mount)}>Mount</button>
      {mount && <Effect2 id={state} />}
    </>
  );
};

export default TestEffect;
