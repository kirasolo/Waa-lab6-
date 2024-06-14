// Dashboard.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import PostDetails from '../components/PostDetails';
import AddPost from '../components/AddPost';
import { PostContext } from '../components/PostContext';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const { selectedPostId, setSelectedPostId } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedPostId !== null) {
      fetchPostDetails(selectedPostId);
    }
  }, [selectedPostId]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchPostDetails = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts/${postId}`);
      setSelectedPost(response.data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  const handleSelectPost = (post) => {
    setSelectedPostId(post.id);
  };

  const handleChangeTitle = async () => {
    if (title.trim() === '') {
      return;
    }
    try {
      await axios.put(`http://localhost:8080/api/posts/1`, { title });
      fetchPosts(); // Update posts list
    } catch (error) {
      console.error('Error updating title:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`);
      fetchPosts(); // Update posts list
      setSelectedPostId(null); // Clear selected post
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <Posts posts={posts} onSelectPost={handleSelectPost} />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <button onClick={handleChangeTitle}>Change Name</button>
      {selectedPost && (
        <PostDetails post={selectedPost} onDelete={handleDeletePost} />
      )}
      <AddPost onPostAdded={fetchPosts} />
    </div>
  );
};

export default Dashboard;
