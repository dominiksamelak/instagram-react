import React, { Profiler } from 'react';
import './styles/right-sidebar.css';
import profPic from './img/icons/profile-picture.png'
import RightSidebarPropositions from './RightSidebarPropositions';
import rightData from './RIghtSidebarData';


const RightSidebar = () => {
  const randomizedData = rightData.sort(() => Math.random() - 0.5);
  const fivePropositions = randomizedData.slice(0, 5);
  return (
    <div className="right-bar">
      <div className="my-profile">
        <div className="my-profile-avatar">
          <img className="left-sidebar-icon" src={profPic} alt="Profile" />
        </div>
        <div className="name-plus-switch">
          <div className="my-profile-name">
            <div className="my-profile-nick">don_harryds</div>
            <div className="my-profile-fullname">Dominik Samelak</div>
          </div>
          <div className="my-profile-switch">Przełącz</div>
        </div>
      </div>
      <div className="right-bar-propositions-text">
        <div className="propositions-forme">Propozycje dla Ciebie</div>
        <div className="propositions-seeall">Zobacz wszystkich</div>
      </div>
      <div className="right-bar-propositions">
      {fivePropositions.map(post => (
            <RightSidebarPropositions key={post.username} post={post} />
          ))}
      <div className="right-bar-info">
        <span className="right-bar-info-option">Informacje</span><span> &#183;</span>
        <span className="right-bar-info-option">Pomoc</span><span>&#183;</span>
        <span className="right-bar-info-option">Prasa</span> <span>&#183;</span>
        <span className="right-bar-info-option">API</span><span> &#183;</span>
        <span className="right-bar-info-option">Praca</span><span>&#183;</span>
        <span className="right-bar-info-option">Prywatność</span><span> &#183;</span>
        <span className="right-bar-info-option">Regulamin</span><span> &#183;</span>
        <span className="right-bar-info-option">Lokalizacje</span><span>&#183;</span>
        <span className="right-bar-info-option">Język</span>
      </div>
      <div className="right-bar-instagram">© 2023 INSTAGRAM FROM META</div>
    </div>
    </div>
  );
}

export default RightSidebar;
