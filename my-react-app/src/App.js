// App.js
import React from 'react';
import Dashboard from './containers/Dashboard';
import { PostProvider } from './components/PostContext';
import './App.css';

const App = () => {
  return (
    <PostProvider>
      <div className="App">
        <Dashboard />
      </div>
    </PostProvider>
  );
};

export default App;
