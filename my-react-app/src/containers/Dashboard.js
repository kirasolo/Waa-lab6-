import React, { useState } from 'react';
import Posts from '../components/Posts';
import PostDetails from '../components/PostDetails'; 

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 111, title: 'Happiness', author: 'Kira', content: 'This is the content in the post' },
    { id: 112, title: 'MIU', author: 'Dean', content: 'This is the content in the post' },
    { id: 113, title: 'Enjoy Life', author: 'Jasmine', content: 'This is the content in the post' }
  ]);
  
  const [title, setTitle] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const handleChangeTitle = () => {
    if (title.trim() === '') {
      return;
    }

    const updatedPosts = posts.map(post => 
      post.id === 111 ? { ...post, title: title } : post
    );
    setPosts(updatedPosts);
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
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
      <button onClick={handleChangeTitle}>Change Name</button>
      {selectedPost && <PostDetails post={selectedPost} />} {/* Render PostDetails if a post is selected */}
    </div>
  );
};

export default Dashboard;