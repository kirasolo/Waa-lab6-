// AddPost.js
import React, { useRef } from 'react';
import axios from 'axios';

const AddPost = ({ onPostAdded }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const handleAddPost = async () => {
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const content = contentRef.current.value;

    if (title.trim() === '' || author.trim() === '' || content.trim() === '') {
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/posts', { title, author, content });
      onPostAdded();
      titleRef.current.value = '';
      authorRef.current.value = '';
      contentRef.current.value = '';
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className='addPost-Container'>
      <input
        type="text"
        ref={titleRef}
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        ref={authorRef}
        placeholder="Author"
      />
      <br />
      <textarea
        ref={contentRef}
        placeholder="Content"
      ></textarea>
      <br />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
