import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import PostFeed from './PostFeed';
import './Community.css';

const Community = () => {
  return (
    <div className="community-container">
      <Navbar />
      <main className="community-content">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="post-feed">
          <PostFeed />
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
