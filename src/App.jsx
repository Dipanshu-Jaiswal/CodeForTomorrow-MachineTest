import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";


export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);

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

  const startIndex = (currPage - 1) * postPerPage;
  const endIndex = startIndex + postPerPage;

  const currPosts = posts.slice(startIndex, endIndex);

  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }


  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 py-10 px-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition
                  hover:scale-110"
          >
            <button
              onClick={() => deletePost(post.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-2xl"
            >
              <RxCross1 />
            </button>

            <h2 className="text-2xl font-bold mb-3 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-gray-600 line-clamp-3 mb-4">
              {post.body}
            </p>

            <p className="text-gray-600 font-semibold mb-4"
            //Here, I hard coded for time and date
            >
              Mon, 21 Dec 2020 14:57 GMT
            </p>

            <img
            //here, im use Open API for image 
              src={`https://picsum.photos/300/180?random=${post.id}`}
              alt=""
              className="w-full h-40 object-cover rounded"
            />

          </div>

        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage(currPage - 1)}
          className="w-12 h-12 rounded-full bg-white shadow disabled:opacity-40 flex justify-center items-center"
        >
          <GrPrevious />
        </button>

        <div className="w-12 h-12 rounded-full bg-white shadow flex justify-center items-center font-bold text-lg">
          {currPage}
        </div>

        <button
          disabled={endIndex >= posts.length}
          onClick={() => setCurrPage(currPage + 1)}
          className="w-12 h-12 rounded-full bg-white shadow disabled:opacity-40 flex justify-center items-center"
        >
          <GrNext />
        </button>
      </div>

    </div>
  );
}