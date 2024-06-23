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
          imageUrl: 'src/assets/5 Ways to Start a Lucrative Real Estate Side Hustle _ Entrepreneur.jpeg',
        },
        {
          id: 2,
          title: '10 Tips for First-Time Home Buyers',
          excerpt: 'Taking the leap into homeownership can be both exciting and overwhelming. In this article, we share 10 valuable tips for first-time home buyers, including budgeting, understanding mortgages, and finding the right real estate agent.',
          author: 'Jonathan Willis',
          date: 'January 10, 2022',
          imageUrl: 'src/assets/Property Real Estate Ad Elements PNG Images,  Building, House, High Rise PNG Transparent Background - Pngtree.jpeg',
        },
        {
          id: 3,
          title: 'The Pros and Cons of Renting vs. Buying',
          excerpt: 'The age-old question: Should I rent or buy? In this comprehensive guide, we explore the financial, lifestyle, and flexibility factors that come into play when deciding whether to rent or buy a home.',
          author: 'Emma Johnson',
          date: 'March 20, 2023',
          imageUrl: 'src/assets/Invest in Moorhead, MN Now! 🏡📈 Looking for a….jpeg',
        },
        {
          id: 4,
          title: 'How to Make Your Home More Energy Efficient',
          excerpt: 'Making your home more energy efficient not only reduces your carbon footprint but also saves you money on utility bills. Discover simple yet effective strategies to improve your home’s energy efficiency, from upgrading appliances to sealing drafts.',
          author: 'Michael Brown',
          date: 'February 5, 2022',
          imageUrl: 'src/assets/Affordable Solar Energy Solutions in Florida_ Save Money and the Environment.jpeg',
        },
        {
          id: 5,
          title: 'The Ultimate Guide to Home Renovation',
          excerpt: 'Thinking of renovating your home? This guide will take you through the entire process, from creating a budget and timeline to hiring contractors and selecting materials. We’ll also share tips for staying sane during the renovation process.',
          author: 'Olivia Davis',
          date: 'December 15, 2022',
          imageUrl: 'src/assets/90s house renovation renders it unrecognisable_ In a good way! - The Interiors Addict.jpeg',
        },
        {
          id: 6,
          title: 'Maximizing Space in Small Homes',
          excerpt: 'Living in a small space doesn’t mean sacrificing comfort or style. Discover clever storage solutions, multifunctional furniture, and design tricks to make your small home feel spacious and inviting.',
          author: 'Avery Thompson',
          date: 'September 25, 2022',
          imageUrl: 'src/assets/Designer dorm rooms_ stylish student housing and hostel hotels in Europe.jpeg',
        },
        {
          id: 7,
          title: 'The Benefits of Smart Home Technology',
          excerpt: 'Smart home technology is no longer a thing of the future. From smart thermostats to voice-controlled lighting, explore the benefits of integrating smart devices into your home, including convenience, energy efficiency, and enhanced security.',
          author: 'Isabella Martinez',
          date: 'November 10, 2022',
          imageUrl: 'src/assets/The Importance of Firewall Configuration in Cybersecurity Compliance.jpeg',
        },
        {
          id: 8,
          title: 'The Top 10 Home Decor Trends for 2024',
          excerpt: 'Stay ahead of the curve with the latest home decor trends for 2024. From natural materials to bold colors and statement lighting, get inspired to refresh your space and make it feel brand new.',
          author: 'Grace Kim',
          date: 'October 20, 2022',
          imageUrl: 'src/assets/15 Decor Ideas for a Glam Living Room.jpeg',
        },
        {
          id: 9,
          title: 'The Ultimate Guide to Landscaping for Beginners',
          excerpt: 'Transform your outdoor space into a lush oasis with our beginner’s guide to landscaping. Learn about plant selection, hardscaping, lighting, and more. We’ll also cover common mistakes to avoid and how to create a landscaping plan.',
          author: 'Benjamin Lee',
          date: 'July 15, 2022',
          imageUrl: 'src/assets/1ca53b9a-7c18-4932-b08a-d1fde808b583.jpeg',
        },
        {
          id: 10,
          title: 'The Benefits of Downsizing Your Home',
          excerpt: 'Downsizing your home can bring numerous benefits, from financial freedom to reduced maintenance. Explore the advantages of downsizing, tips for decluttering, and strategies for transitioning to a smaller space.',
          author: 'Ethan Wilson',
          date: 'June 2, 2022',
          imageUrl: 'src/assets/How to Downsize a Home in 5 Days - Organize, Declutter, and Launch your Professional Organizing Business.jpeg',
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
