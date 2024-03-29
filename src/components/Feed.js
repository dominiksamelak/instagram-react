import React from 'react';
import './styles/feed.css';
import data from './FeedData.js'
import FeedStory from './FeedStory.js';
import FeedPosts from './FeedPosts.js';

const Feed = () => {
  return (
    <div className="feed">
      <div className='feed-stories'>
        {data.map(post => (
          <FeedStory key={post.username} post={post} />
        ))}
      </div>

      {data.map(post => (
        <FeedPosts key={post.username} post={post} />
      ))}
    </div>   

  );
}

export default Feed;
