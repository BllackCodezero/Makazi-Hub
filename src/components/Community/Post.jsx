import React from 'react';

const Post = ({ post }) => {
  return (
    <article className="post">
      <div className="post-header">
        <img src={post.avatar} alt={`${post.user}'s avatar`} className="post-avatar" />
        <div className="post-info">
          <h4>{post.user}</h4>
          <span className="post-time">2 hours ago</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      <div className="post-actions">
        <button><i className="far fa-heart"></i> {post.likes}</button>
        <button><i className="far fa-comment"></i> {post.comments}</button>
        <button><i className="far fa-share-square"></i> Share</button>
      </div>
    </article>
  );
};

export default Post;