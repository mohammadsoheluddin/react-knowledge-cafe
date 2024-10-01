import PropTypes from "prop-types";
import "./Blog.css";
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    hashtags,
    posted_date,
  } = blog;
  return (
    <div className="mb-14 border-b-2">
      <img className="w-full h-96 rounded" src={cover} alt="cover-image" />
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-between gap-6 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <IoBookmarks />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-3 mb-3">{title}</h1>
      <p className="mb-6">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold underline"
        onClick={() => handleMarkAsRead(reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
