

import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Page number
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 6;

  useEffect(() => {

    setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });

    }, 5000);

  }, []);

  // Pagination
  const firstIndex = (currentPage - 1) * postPerPage;
  const lastIndex = firstIndex + postPerPage;

  const currentPosts = posts.slice(firstIndex, lastIndex);

  // Delete
  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <h1>Posts</h1>

      {
        currentPosts.map((post) => (

          <div
            key={post.id}
            style={{
              border: "1px solid gray",
              margin: "15px",
              padding: "15px",
            }}
          >

            <button onClick={() => deletePost(post.id)}>
              Delete
            </button>

            <h3>{post.title}</h3>

            <p>{post.body}</p>

          </div>

        ))
      }

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <button
        disabled={lastIndex >= posts.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default App;




App.jsx
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 6;

  useEffect(() => {

    setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        });

    }, 5000);

  }, []);

  if (loading)
    return <h1>Loading...</h1>;

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div>

      <div className="cards">

        {
          currentPosts.map(post => (
            <Card
              key={post.id}
              post={post}
              posts={posts}
              setPosts={setPosts}
            />
          ))
        }

      </div>

      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );

}

export default App;


card.jsx
function Card({ post, posts, setPosts }) {

  const deleteCard = () => {

    const newPosts = posts.filter(item => item.id !== post.id);

    setPosts(newPosts);

  };

  return (

    <div className="card">

      <button onClick={deleteCard}>❌</button>

      <h3>{post.title}</h3>

      <p>{post.body}</p>

    </div>

  );

}

export default Card;


pagination.jsx
function Pagination({

  totalPosts,
  postPerPage,
  currentPage,
  setCurrentPage

}) {

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {

    pages.push(i);

  }

  return (

    <div>

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {

        pages.map(page => (

          <button
            key={page}
            onClick={() => setCurrentPage(page)}
          >

            {page}

          </button>

        ))

      }

      <button
        disabled={currentPage === pages.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>

  );

}

export default Pagination;


app.jsx
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 6;

  useEffect(() => {

    setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        });

    }, 5000);

  }, []);

  if (loading)
    return <h1>Loading...</h1>;

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div>

      <div className="cards">

        {
          currentPosts.map(post => (
            <Card
              key={post.id}
              post={post}
              posts={posts}
              setPosts={setPosts}
            />
          ))
        }

      </div>

      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );

}

export default App;
















import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Page number
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 6;

  useEffect(() => {

    setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });

    }, 5000);

  }, []);

  // Pagination
  const firstIndex = (currentPage - 1) * postPerPage;
  const lastIndex = firstIndex + postPerPage;

  const currentPosts = posts.slice(firstIndex, lastIndex);

  // Delete
  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <h1>Posts</h1>

      {
        currentPosts.map((post) => (

          <div
            key={post.id}
            style={{
              border: "1px solid gray",
              margin: "15px",
              padding: "15px",
            }}
          >

            <button onClick={() => deletePost(post.id)}>
              Delete
            </button>

            <h3>{post.title}</h3>

            <p>{post.body}</p>

          </div>

        ))
      }

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <button
        disabled={lastIndex >= posts.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default App;