import React, { useEffect } from 'react';
import shakiraFeed from './img/feed-posts/shakira.png';
import jarekAvatar from './img/feed-avatars/jarek.jpg';
import './styles/story.css';
import exit from './img/icons/exit.png';

function Story({ toggleStory }) {
  console.log('RENDER');
  useEffect(() => {
    console.log('use effect');
    let width = 0;
    const intervalFn = () => {
      const progressBar = document.getElementById('progress-bar');
      width += 20;
      console.log({ width });
      progressBar.style.width = width + '%';
      if (width >= 120) {
        toggleStory();
      }
    };
    setTimeout(intervalFn, 10);
    console.log('after 1st invoke', width);
    const interval = setInterval(intervalFn, 1000);

    return () => clearInterval(interval);
  }, [toggleStory]);

  function handleExitClick() {
    toggleStory();
  }

  return (
    <div className="story-container">
      <div className="story-top">
        <div className="story-progress">
          <div id="progress-bar"></div>
        </div>
        <div className="story-top-info">
          {/* Listen to click event on the avatar */}
          <img className="story-avatar" src={jarekAvatar} alt="avatar" />
          <span className="story-username">jarek</span>
        </div>
        <div className="story-exit" onClick={handleExitClick}>
          <img className="exit-button" src={exit} alt="Exit" />
        </div>
      </div>
      <div className="story-pic">
        <img className="story-pic-img" src={shakiraFeed} alt="story" />
      </div>
    </div>
  );
}

export default Story;
