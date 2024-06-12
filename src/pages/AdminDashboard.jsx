import React from 'react';

const AdminDashboard = () => {
  // Placeholder data
  const listings = [
    { id: 1, title: 'Cozy Apartment', status: 'Active' },
    { id: 2, title: 'Modern Studio', status: 'Inactive' },
    // More listings...
  ];

  return (
    <div className="admin-dashboard">
      <h1>Manage Listings</h1>
      <div className="listings">
        {listings.map((listing) => (
          <div key={listing.id} className="listing">
            <h2>{listing.title}</h2>
            <p>Status: {listing.status}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

