import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author_img, author, 
        posted_date, reading_time, hashtags} = blog;
    // console.log(blog);
    
    return (
        <div className="max-w-[851px] m-3 border-b mb-10">
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            {/* author details */}
            <div className='mt-8 flex flex-wrap justify-between items-center'>
                <div className='flex gap-6'>
                    <div>
                        <img className='w-[50px] md:w-[64px]' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-[16px] font-semibold text-gray-600'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 text-[20px] font-medium'>
                    <p>{reading_time} min read</p> 
                    <button onClick={() => handleAddToBookmark(blog)} className='hover:text-orange-400 ease-in duration-100'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-2xl text leading-normal md:text-[40px] font-bold">Blog {title} </h2>
            <p className='flex gap-4 my-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a  href=''/>#{hash}</span>)
                }
            </p>
            <div className='mb-8'>
                <a className='ring-1 ring-orange-400 border-none py-2 px-5 rounded-full ease-in duration-100 hover:bg-orange-400 hover:border-none hover:text-white ' href="">Mark as read</a>
            </div>
            {/* <ToastContainer/> */}
        </div>
        
        );
    };
    
    
Blog.propTypes = {   
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;