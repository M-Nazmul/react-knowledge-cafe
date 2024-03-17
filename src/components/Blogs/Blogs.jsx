import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="max-w-[1280px] mx-auto py-3 px-6">
            
            {
                blogs.map( blog => <Blog key={blog.id}
                 blog = {blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;