import { useEffect, useState } from "react";
import AddBlog from "../components/AddBlog";

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
    <>
    <h3 style={{textAlign: "center"}}>Zapraszam do komentowania!</h3>
    <div style={{display: "flex", justifyContent: "center"}}>
    <AddBlog/>
    </div>
    <div style={{margin: "0 auto", maxWidth: "70%", display: "flex", flexDirection: "column-reverse"}}>
    
    {blogs.map((blog) => (
      
      <div className="card mb-3" key={blog._id}>
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
      
    ))}

  </div>
  
 

</>
  );
}