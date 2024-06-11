import React from 'react';

const PostDetails = ({ post }) => {
  return (
    <div className='postDetail-container'>
    
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default PostDetails;