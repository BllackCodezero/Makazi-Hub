import React from 'react';

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="user-profile">
      <img src="src/assets/sivasurya-sa-rViBhQwAZKU-unsplash.jpg" alt="User Profile" className="profile-pic" />

        <h3>Darell Adero</h3>
        <p>Computer Science Student</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#"><i className="fas fa-user-friends"></i> Friends</a></li>
          <li><a href="#"><i className="fas fa-bookmark"></i> Saved Posts</a></li>
          <li><a href="#"><i className="fas fa-building"></i> My Accommodation</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;