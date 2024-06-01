import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const showMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, visiblePosts).map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={showMorePosts}>Show More</button>
    </div>
  );
}

export default App;
