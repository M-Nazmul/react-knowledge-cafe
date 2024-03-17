import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Bookmarks from './Bookmarks/Bookmarks';
// import { toast } from 'react-toastify';

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleAddToBookmark = blog =>{
    // toast("blog");
      console.log(blog);
      const newBookmarks = [...bookmarks, blog] ;
      setBookmark(newBookmarks);

  };
  return (
    <>
      <Header></Header>
      <div  className="md:flex md:justify-between  max-w-[1280px] mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}
export default App
