import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-4">
      <div className="p-4 rounded-md bg-blue-200 border-blue-400 mb-4">
        <h2 className="text-2xl  font-bold text-center my-4 text-blue-600">
          Spent Time on read: {readingTime} min
        </h2>
      </div>
      <div className="bg-gray-300 p-4 rounded-md">
        <h2 className="text-3xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
