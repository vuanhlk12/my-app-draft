import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';
import PostDisplay from './PostDisplay';
import { POST_TYPE } from './store/PostReducer';

const TestRedux = () => {
  const [userid, setUserid] = useState(0);
  const dispatch = useDispatch();
  const [postid, setPostId] = useState(0);

  const onChangeUserId = async (e) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;

    setUserid(useridFromInput);

    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();

      const usr = users.find((userItem) => {
        return userItem && userItem.id === useridFromInput;
      });

      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr?.id,
          username: usr?.username,
          email: usr?.email,
          city: usr?.address.city,
        },
      });
    }
  };

  const onChangePostId = async (e) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + postIdFromInput
    );
    if (postResponse.ok) {
      const post = await postResponse.json();
      
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

  return (
    <>
      <div style={{ width: '300px' }}>
        <div className='App'>
          <label>user id</label>
          <input value={userid} onChange={onChangeUserId} />
        </div>
        <UserDisplay />
      </div>
      <br />
      <div style={{ width: '300px' }}>
        <div className='App'>
          <label>post id</label>
          <input value={postid} onChange={onChangePostId} />
        </div>
        <PostDisplay />
      </div>
    </>
  );
};

export default TestRedux;
