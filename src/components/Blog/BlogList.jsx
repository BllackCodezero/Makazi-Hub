import React, { useState } from 'react';
import BlogCard from './BlogCard';
import BlogFeatured from './BlogFeatured';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const BlogList = () => {
    const [posts, setPosts] = useState([
        {
          id: 1,
          title: 'The Ultimate Guide to Finding Your Dream Home',
          excerpt: 'Finding your dream home can be a daunting task, but with the right tools and mindset, it can be an exciting journey. In this guide, we’ll cover everything from defining your must-haves to navigating the real estate market.',
          author: 'Sophia Anderson',
          date: 'May 20, 2023',
          imageUrl: 'src/assets/blog.jpg',
        },
        {
          id: 2,
          title: '10 Tips for First-Time Home Buyers',
          excerpt: 'Taking the leap into homeownership can be both exciting and overwhelming. In this article, we share 10 valuable tips for first-time home buyers, including budgeting, understanding mortgages, and finding the right real estate agent.',
          author: 'Jonathan Willis',
          date: 'January 10, 2022',
          imageUrl: '/images/post-2.jpg',
        },
        {
          id: 3,
          title: 'The Pros and Cons of Renting vs. Buying',
          excerpt: 'The age-old question: Should I rent or buy? In this comprehensive guide, we explore the financial, lifestyle, and flexibility factors that come into play when deciding whether to rent or buy a home.',
          author: 'Emma Johnson',
          date: 'March 20, 2023',
          imageUrl: '/images/post-3.jpg',
        },
        {
          id: 4,
          title: 'How to Make Your Home More Energy Efficient',
          excerpt: 'Making your home more energy efficient not only reduces your carbon footprint but also saves you money on utility bills. Discover simple yet effective strategies to improve your home’s energy efficiency, from upgrading appliances to sealing drafts.',
          author: 'Michael Brown',
          date: 'February 5, 2022',
          imageUrl: '/images/post-4.jpg',
        },
        {
          id: 5,
          title: 'The Ultimate Guide to Home Renovation',
          excerpt: 'Thinking of renovating your home? This guide will take you through the entire process, from creating a budget and timeline to hiring contractors and selecting materials. We’ll also share tips for staying sane during the renovation process.',
          author: 'Olivia Davis',
          date: 'December 15, 2022',
          imageUrl: '/images/post-5.jpg',
        },
        {
          id: 6,
          title: 'Maximizing Space in Small Homes',
          excerpt: 'Living in a small space doesn’t mean sacrificing comfort or style. Discover clever storage solutions, multifunctional furniture, and design tricks to make your small home feel spacious and inviting.',
          author: 'Avery Thompson',
          date: 'September 25, 2022',
          imageUrl: '/images/post-6.jpg',
        },
        {
          id: 7,
          title: 'The Benefits of Smart Home Technology',
          excerpt: 'Smart home technology is no longer a thing of the future. From smart thermostats to voice-controlled lighting, explore the benefits of integrating smart devices into your home, including convenience, energy efficiency, and enhanced security.',
          author: 'Isabella Martinez',
          date: 'November 10, 2022',
          imageUrl: '/images/post-7.jpg',
        },
        {
          id: 8,
          title: 'The Top 10 Home Decor Trends for 2024',
          excerpt: 'Stay ahead of the curve with the latest home decor trends for 2024. From natural materials to bold colors and statement lighting, get inspired to refresh your space and make it feel brand new.',
          author: 'Grace Kim',
          date: 'October 20, 2022',
          imageUrl: '/images/post-8.jpg',
        },
        {
          id: 9,
          title: 'The Ultimate Guide to Landscaping for Beginners',
          excerpt: 'Transform your outdoor space into a lush oasis with our beginner’s guide to landscaping. Learn about plant selection, hardscaping, lighting, and more. We’ll also cover common mistakes to avoid and how to create a landscaping plan.',
          author: 'Benjamin Lee',
          date: 'July 15, 2022',
          imageUrl: '/images/post-9.jpg',
        },
        {
          id: 10,
          title: 'The Benefits of Downsizing Your Home',
          excerpt: 'Downsizing your home can bring numerous benefits, from financial freedom to reduced maintenance. Explore the advantages of downsizing, tips for decluttering, and strategies for transitioning to a smaller space.',
          author: 'Ethan Wilson',
          date: 'June 2, 2022',
          imageUrl: '/images/post-10.jpg',
        },
      ]);
      
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div>
      <Navbar />

      {/* Featured Blog */}
      <main className="featured-blog">
        <BlogFeatured post={featuredPost} />
      </main>

      {/* Recent Blog Posts */}
      <main className="recent-blog-posts">
        <h2>Recent blog posts</h2>
        <div className="blog-grid">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <button className="load-more-button">Load More</button>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
