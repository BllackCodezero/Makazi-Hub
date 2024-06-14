import React from 'react';
import './Blog.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.imageUrl} alt={post.title} />
      <div className="blog-card-content">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blog-card-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
