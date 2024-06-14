import React from 'react';
import './Blog.css';

const BlogFeatured = ({ post }) => {
  return (
    <div className="featured-blog-post">
      <div className="featured-image">
  <img src={post.imageUrl} alt={post.title} />
  <div className="featured-overlay"> {/* Add this div */}
    <p>Featured</p>
    <h2>{post.title} </h2>
    <p className="featured-excerpt">{post.excerpt}</p>
    <a href="#" className="read-more-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div> 
</div>

    </div>
  );
};

export default BlogFeatured;
