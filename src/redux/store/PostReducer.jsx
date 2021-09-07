export const POST_TYPE = 'POST_TYPE';

export const PostReducer = (state = null, action) => {
  switch (action.type) {
    case POST_TYPE:
      return action.payload;
    default:
      return state;
  }
};
