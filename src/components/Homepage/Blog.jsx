import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { title: "10 Tips for First-Time Home Buyers", excerpt: "Buying your first home can be daunting. Here are some tips to help you..." },
    { title: "How to Increase Your Property Value", excerpt: "Want to boost your home's value? Check out these simple improvements..." },
    { title: "The Future of Real Estate in 2024", excerpt: "Experts predict major shifts in the real estate market. Here's what to expect..." }
  ];

  return (
    <section className="blog">
      <h2>Our Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={`src/assets/5 Ways to Start a Lucrative Real Estate Side Hustle _ Entrepreneur.jpeg`} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
      <button className="view-all">View All Posts</button>
    </section>
  );
};

export default Blog;