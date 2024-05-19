import React, { useState } from 'react';
import BottomSidebar from './components/BottomSidebar';
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';
import Story from './components/Story'; 
import RightSidebar from './components/RightSidebar';
import './app.css'

function App() {
  const [showStory, setShowStory] = useState(false);

  const toggleStory = () => {
    setShowStory(!showStory);
  };

  return (
    <div className='app-container'>
      {showStory ? <Story toggleStory={toggleStory}/> : (
        <>
          <div className='left-sidebar'>
            <LeftSidebar  />
          </div>
          <div className='feed-container'>
            <Feed toggleStory={toggleStory}/>
          </div>
          {/* <BottomSidebar /> */}
        </>
      )}
    </div>
  );
}

export default App;