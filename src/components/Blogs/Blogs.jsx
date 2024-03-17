import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="max-w-[1280px] mx-auto py-3">
            <h2 className="text-3xl font-bold">Total Blog: {blogs.length}</h2>
        </div>
    );
};

export default Blogs;