import React from 'react';
import BottomSidebar from './components/BottomSidebar';
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';

import RightSidebar from './components/RightSidebar';
import './app.css'

function App() {
  return (
    <div className='app-container'>
      <div className='left-sidebar'>
        <LeftSidebar />
      </div>
      <div className='feed-container'>
        <Feed />
        <RightSidebar />
      </div>

    </div>
  );
}

export default App;
