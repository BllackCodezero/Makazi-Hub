import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './BlogPage.css';

const BlogPost = ({ title, content, image, readTime }) => (
  <div className="blog-post">
    <img src={image} alt={title} className="blog-image" />
    <h3>{title}</h3>
    <p>{content}</p>
    <div className="blog-footer">
      <button className="read-now">Read Now</button>
      <div className="read-time">
        <span className="icon">🕑</span>
        <span>{readTime}</span>
      </div>
    </div>
  </div>
);

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "Discover the Perfect Home with Ease",
      content: "Finding your perfect home is now simple with our home finder website. Use advanced search filters to narrow down options by location, price, and amenities. Our interactive maps show the proximity to essential services. Detailed listings with photos and user reviews ensure no surprises."
    },
    {
      title: "Discover the Perfect Home with Ease",
      content: "Finding your perfect home is now simple with our home finder website. Use advanced search filters to narrow down options by location, price, and amenities. Our interactive maps show the proximity to essential services. Detailed listings with photos and user reviews ensure no surprises."
    }
  ];

  const regularPosts = [
    {
      title: "Discover the Perfect Home with Ease",
      content: "Finding your perfect home is now simple with our home finder website. Use advanced search filters to narrow down options by location, price, and amenities...",
      image: "image.png",
      readTime: "5 min"
    },
    {
      title: "5 Tips for First-Time Home Buyers",
      content: "Buying your first home can be overwhelming. Here are 5 essential tips to help you navigate the process and make informed decisions...",
      image: "image.png",
      readTime: "7 min"
    },
    {
      title: "The Impact of Location on Property Value",
      content: "Location is one of the most crucial factors in determining property value. Learn how different aspects of location can affect your investment...",
      image: "image.png",
      readTime: "6 min"
    },
    {
      title: "Understanding Mortgage Rates",
      content: "Mortgage rates can significantly impact your home buying budget. This article explains how mortgage rates work and what factors influence them...",
      image: "image.png",
      readTime: "8 min"
    },
    {
      title: "Home Renovation: Increasing Your Property Value",
      content: "Strategic renovations can boost your property's value. Discover which improvements offer the best return on investment...",
      image: "image.png",
      readTime: "9 min"
    },
    {
      title: "The Rise of Smart Homes",
      content: "Smart home technology is revolutionizing the real estate market. Learn about the latest trends and how they can enhance your living experience...",
      image: "image.png",
      readTime: "7 min"
    },
    {
      title: "Navigating the Closing Process",
      content: "The closing process can be complex. This guide breaks down each step, helping you understand what to expect when finalizing your home purchase...",
      image: "image.png",
      readTime: "10 min"
    },
    {
      title: "Investing in Real Estate: Pros and Cons",
      content: "Real estate can be a lucrative investment, but it's not without risks. Explore the advantages and disadvantages of property investment...",
      image: "image.png",
      readTime: "8 min"
    }
  ];

  return (
    <div className="blog-page-container">
      <Navbar />
      <main className="blog-page">
        <h1>Our Blog</h1>
        <div className="featured-posts">
          {featuredPosts.map((post, index) => (
            <div key={index} className="featured-post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
        <div className="regular-posts">
          {regularPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <button className="load-more">Load More</button>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;