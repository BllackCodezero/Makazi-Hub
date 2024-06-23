import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="trending-section">
        <h3>Trending Accommodations</h3>
        <ul>
          <li>#LuxuryDorms</li>
          <li>#AffordableStudioApts</li>
          <li>#CampusLiving</li>
          <li>#RoommateWanted</li>
        </ul>
      </div>
      <div className="announcements">
        <h3>Announcements</h3>
        <ul>
          <li>New housing complex opening near campus!</li>
          <li>Early bird discounts for next semester bookings</li>
          <li>Virtual tour event this weekend</li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;