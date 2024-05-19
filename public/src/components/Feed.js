import React, { useState } from 'react';
import './styles/feed.css';
import data from './FeedData.js'
import FeedStory from './FeedStory.js';
import FeedPosts from './FeedPosts.js';
import RightSidebar from './RightSidebar.js'
import RightSidebarPropositions from './RightSidebarPropositions.js';


const Feed = ({toggleStory}) => {

  return (
    <div className="feed-container">
      
      <div className='feed'>
        <div className='feed-stories'>
          {data.map(post => (
            <FeedStory key={post.username} post={post}  toggleStory={toggleStory}/> 
          ))}
        </div>
        <div className='feed-posts'>
          {data.map(post => (
            <FeedPosts key={post.username} post={post} /> 
          ))}
        </div>
      </div>        
      <div className='right-sidebar'>
        <RightSidebar/>
      </div>
      
    </div>   
  );
}

export default Feed;
