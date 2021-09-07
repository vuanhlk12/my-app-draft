import React from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { POST_TYPE } from './store/PostReducer';

const mapStateToProps = (state) => ({ post: state.post });

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const PostDisplay = (props) => {
  // const { post, dispatch } = props;
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  console.log('renders PostDisplay');

  const handleChange = async (e) => {
    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + e.target.value
    );
    if (postResponse.ok) {
      const post = await postResponse.json();
      //console.log('post', post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post?.id,
          title: post?.title,
          body: post?.body,
        },
      });
    }
  };

  if (post) {
    return (
      <>
        <input onKeyUp={handleChange} />
        <div>
          <label>title:</label>
          &nbsp;{post?.title}
        </div>
        <div>
          <label>body:</label>
          &nbsp;{post?.body}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default PostDisplay;
//export default React.memo(PostDisplay);
//export default connect(mapStateToProps, mapDispatchToProps)(PostDisplay);
