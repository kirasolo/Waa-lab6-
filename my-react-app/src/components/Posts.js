import React from 'react';
import Post from './Post';
const Posts = ({ posts, onSelectPost }) => {
  return (
    <div
    style={{ display: 'flex', justifyContent: 'space-around' }}>
      {posts.map(post => (
        <Post key={post.id} post={post} onSelectPost={onSelectPost} />
      ))}
    </div>  
  );
};

export default Posts;