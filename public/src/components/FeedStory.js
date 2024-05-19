import React from 'react';
import './styles/feed-story.css';
import storiesCircle from './img/icons/stories.png';

function FeedStory({ toggleStory, post }) {
  const handleAvatarClick = () => {
    toggleStory();
    console.log("Avatar clicked");
  };

  return (
    <div className="stories-avatar">
      <img className="avatar" src={post.avatarSrc} alt={post.username} onClick={handleAvatarClick} />
      <div className="stories-circle">
        <img className="circle" src={storiesCircle} alt="Story" />
        <div className="stories-circle-username">{post.username} </div>
      </div>
    </div>
  );
}

export default FeedStory;