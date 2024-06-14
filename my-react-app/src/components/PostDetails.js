// PostDetails.js
import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';
import Comment from './Comment';
import { PostContext } from './PostContext';

const PostDetails = ({ onDelete }) => {
  const { selectedPostId } = useContext(PostContext);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    if (!selectedPostId) return;

    try {
      const response = await axios.get(`http://localhost:8080/api/posts/${selectedPostId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [selectedPostId]);

  const fetchPostDetails = useCallback(async () => {
    if (!selectedPostId) return;

    try {
      const response = await axios.get(`http://localhost:8080/api/posts/${selectedPostId}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }, [selectedPostId]);

  useEffect(() => {
    fetchPostDetails();
    fetchComments();
  }, [fetchPostDetails, fetchComments]);

  if (!post) return null;

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
