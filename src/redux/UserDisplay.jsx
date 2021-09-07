import React from 'react';
import { useSelector } from 'react-redux';

const UserDisplay = () => {
  console.log('renders UserDisplay');
  const user = useSelector((state) => state.user);

  if (user) {
    return (
      <>
        <div>
          <label>username:</label>
          &nbsp;{user.username}
        </div>
        <div>
          <label>email:</label>
          &nbsp;{user.email}
        </div>
        <div>
          <label>city:</label>
          &nbsp;{user.city}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default UserDisplay;
//export default React.memo(UserDisplay);
