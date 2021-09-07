export const USER_TYPE = 'USER_TYPE';

export const UserReducer = (state = null, action) => {
  switch (action.type) {
    case USER_TYPE:
      return action.payload;
    default:
      return state;
  }
};
