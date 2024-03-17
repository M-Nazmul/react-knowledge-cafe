import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    const {title} = bookmark;
    return (
        <div className=''>
            <h3 className='text-xl md:text-3xl bg-white rounded-lg mb-4 p-5'>{title}</h3>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark:PropTypes.object
};

export default Bookmark;