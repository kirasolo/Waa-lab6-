// PostDetails.js
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Comment from './Comment';

const PostDetails = ({ post, onDelete }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts/${post.id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [post.id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="postDetail-container">
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <button>Edit</button>
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
