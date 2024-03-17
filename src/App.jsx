import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Blogs></Blogs> 
      <div  className="md:flex md:justify-between md:items-center max-w-[1280px] md:gap-6 mx-auto">
        <Blog></Blog>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
