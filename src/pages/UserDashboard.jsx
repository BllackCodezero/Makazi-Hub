import React from 'react';

const UserDashboard = () => {
  // Placeholder data
  const bookings = [
    { id: 1, title: 'Cozy Apartment', status: 'Confirmed' },
    { id: 2, title: 'Modern Studio', status: 'Pending' },
    // More bookings...
  ];

  return (
    <div className="user-dashboard">
      <h1>My Bookings</h1>
      <div className="bookings">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking">
            <h2>{booking.title}</h2>
            <p>Status: {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
