import React from 'react';
import logo from './img/icons/logo.png';
import homeIcon from './img/icons/home.png';
import searchIcon from './img/icons/search.png';
import bookmarksIcon from './img/icons/bookmarks.png';
import reelsIcon from './img/icons/reels.png';
import messagesIcon from './img/icons/messages.png';
import likeIcon from './img/icons/like.png';
import addIcon from './img/icons/add.png';
import profilePictureIcon from './img/icons/profile-picture.png';
import moreIcon from './img/icons/more.png';
import './styles/left-sidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo-sidebar">
        <img className="left-sidebar-logo" src={logo} alt="Logo" />
      </div>
      <div className="main-page-menu">
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={homeIcon} alt="Home Icon" />
          </div>
          <div className="left-sidebar-option">
            Strona główna
          </div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={searchIcon} alt="Search Icon" />
          </div>
          <div className="left-sidebar-option">Szukaj</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={bookmarksIcon} alt="Bookmarks Icon" />
          </div>
          <div className="left-sidebar-option">Zakładki</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={reelsIcon} alt="Reels Icon" />
          </div>
          <div className="left-sidebar-option">Reels</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={messagesIcon} alt="Messages Icon" />
          </div>
          <div className="left-sidebar-option">Wiadomości</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={likeIcon} alt="Like Icon" />
          </div>
          <div className="left-sidebar-option">Powiadomienia</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={addIcon} alt="Add Icon" />
          </div>
          <div className="left-sidebar-option">Utwórz</div>
        </div>
        <div className="menu-option">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={profilePictureIcon} alt="Profile Picture Icon" />
          </div>
          <div className="left-sidebar-option">Profil</div>
        </div>
        <div className="menu-option-bottom">
          <div className="sidebar-icon">
            <img className="left-sidebar-icon" src={moreIcon} alt="More Icon" style={{ width: '22px' }} />
          </div>
          <div className="left-sidebar-option">Więcej</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
