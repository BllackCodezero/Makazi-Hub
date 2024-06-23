import React from 'react';
import Post from './Post';

const PostFeed = () => {
  const posts = [
    {
      id: 1,
      user: 'Sarah',
      avatar: 'src/assets/bayu-nugroho-5rbXtBxASv4-unsplash.jpg',
      content: 'Just moved into my new luxury dorm! Check out this amazing view!',
      image: 'src/assets/Designer dorm rooms_ stylish student housing and hostel hotels in Europe.jpeg',
      likes: 120,
      comments: 25,
    },
    {
      id: 2,
      user: 'Mike',
      avatar: 'src/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg',
      content: 'My cozy studio apartment near campus. Perfect for focused studying!',
      image: 'src/assets/Gallery of Bigelow Laboratory Graham Shimmield Residence Hall _ Simons Architects  - 20.jpeg',
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      user: 'Emma',
      avatar: 'src/assets/kuntal-maity-5x7B7HvWRmY-unsplash.jpg',
      content: 'Living my best life in this shared house with awesome roommates!',
      image: 'src/assets/_Young People In Hostel Bedroom_ by Stocksy Contributor _Mosuno_.jpeg',
      likes: 156,
      comments: 32,
    },
    // Add more posts here
  ];

  return (
    <section className="post-feed">
      <div className="create-post">
        <img src="src/assets/sivasurya-sa-rViBhQwAZKU-unsplash.jpg" alt="User Avatar" />
        <input type="text" placeholder="Share your accommodation experience..." />
        <button><i className="fas fa-image"></i> Photo</button>
      </div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostFeed;