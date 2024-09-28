import PropTypes from "prop-types";
import "./Blog.css";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <img src={blog.cover} alt="cover-image" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
