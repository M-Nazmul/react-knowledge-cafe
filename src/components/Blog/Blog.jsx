import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, author_img, author, 
        posted_date, reading_time} = blog;
    console.log(blog);
    return (
        <div className="w-3/2 m-3 border-b">
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            {/* author details */}
            <div className='mt-8 flex justify-between items-center'>
                <div className='flex gap-6'>
                    <div>
                        <img className='w-[64px]' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-[16px] font-semibold text-gray-600'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 text-[20px] font-medium'>
                    <p>{reading_time} min read</p> 
                    <button>Bookmark</button>
                </div>
            </div>
            <h2 className="text-[40px] font-bold">Blog {title} </h2>
        </div>
    );
};

Blog.propTypes = {   
    blog: PropTypes.object.isRequired
}

export default Blog;