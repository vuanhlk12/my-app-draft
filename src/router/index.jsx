import React from 'react';
import { useHistory, withRouter } from 'react-router';

const RouterHook = (props) => {
  //const { history } = props;
  const history = useHistory();
  return (
    <>
      <button
        onClick={() => {
          history.push('/CustomHook');
        }}
      >
        CustomHook
      </button>
      <button
        onClick={() => {
          history.push('/TestEffect');
        }}
      >
        TestEffect
      </button>
      <button
        onClick={() => {
          history.push('/TestRedux');
        }}
      >
        TestRedux
      </button>
    </>
  );
};

export default RouterHook;
//export default withRouter(RouterHook);
