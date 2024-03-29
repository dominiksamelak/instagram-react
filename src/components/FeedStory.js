// FeedStory.js
import React from 'react';
import './styles/feed-story.css'
import storiesCircle from './img/icons/stories.png'

function FeedStory({ post }) {
  return (
    <div className="stories-avatar">
      <img className="avatar" src={post.avatarSrc} alt={post.username} />
      <div className="stories-circle">
      {/* <img className="avatar" src={post.avatarSrc} alt={post.username} /> */}
        <img className="circle" src={storiesCircle} alt="Story" />
        <div className="stories-circle-username">{post.username}</div>
      </div>
    </div>
  );
}

export default FeedStory;