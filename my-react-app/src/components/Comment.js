// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <p><strong>{comment.author}:</strong> {comment.text}</p>
    </div>
  );
};

export default Comment;
