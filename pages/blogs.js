import { useEffect, useState } from "react";

export default function Posts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
           <h1> {blog.title}</h1>
           <p>{blog.content}</p>
           
           </li>
        ))}
      </ul>
    </div>
  );
}