import React, { Profiler } from 'react';
import './styles/right-sidebar.css';
import damianek from './img/icons/damianek.png'
import damianek2 from './img/icons/damianek2.png'
import damianek3 from './img/icons/damianek3.png'
import damianek4 from './img/icons/damianek4.png'
import damianek5 from './img/icons/damianek5.png'
import profPic from './img/icons/profile-picture.png'


const RightSidebar = () => {
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
        <div className="propositions-user-top">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={damianek} alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">damianbachorz</div>
            <div className="propositions-followed">Obserwowane przez don_harryds</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
        <div className="propositions-user">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={damianek2}alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">dimibahusz</div>
            <div className="propositions-followed">Obserwowane przez dominiko_samel...</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
        <div className="propositions-user">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={damianek3} alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">bahrajndejmian</div>
            <div className="propositions-followed">Obserwowane przez al_harry</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
        <div className="propositions-user">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={damianek4}alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">damibaba</div>
            <div className="propositions-followed">Obserwowane przez babiba</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
        <div className="propositions-user">
          <div className="propositions-avatar">
            <img className="propositions-picture" src={damianek5} alt="User" />
          </div>
          <div className="propositions-name">
            <div className="propositions-nick">dami_szakira</div>
            <div className="propositions-followed">Obserwowane przez shakira_offical</div>
          </div>
          <div className="propositions-follow">Obserwuj</div>
        </div>
      </div>
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
  );
}

export default RightSidebar;
