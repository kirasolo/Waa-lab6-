
import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = async () => {
    if (title.trim() === '' || author.trim() === '' || content.trim() === '') {
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/posts', { title, author, content });
      onPostAdded(); // Fetch updated posts list
      setTitle('');
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className='addPost-Container'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br></br>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
       <br></br>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <br></br>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
