import PropTypes  from 'prop-types';
import Bookmark from '../components/Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <div className="md:w-[411px] bg-[#F3F3F3] p-7 mx-4 md:mr-4 rounded-lg">
            <h2 className="p-3 text-3xl text-center mb-4 mt-5 md:mt-0">
                Bookmarks: {bookmarks.length}
            </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.object
}
export default Bookmarks;
