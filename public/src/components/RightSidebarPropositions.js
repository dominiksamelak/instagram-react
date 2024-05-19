import React, { Profiler } from 'react';
import './styles/right-sidebar.css';



const RightSidebarPropositions = ({post}) => {
  return (
        <div className="propositions-user-top">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={post.avatarSrc} alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">{post.username}</div>
            <div className="propositions-followed">Obserwowane przez don_harryds</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
  );
}

export default RightSidebarPropositions;
