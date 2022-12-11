import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import appicon from './assets/appicon.svg';
import './navbarcss.css';
import "rsuite/dist/rsuite.min.css";

import { Popover, Pane} from 'evergreen-ui'
import { Dropdown } from 'rsuite';

import bell from './assets/bell.svg';
import notif1 from './assets/navbarassets/notif1-pic.svg';
import notif2 from './assets/navbarassets/notif2-pic.svg';
import notif3 from './assets/navbarassets/notif3-pic.svg';
import notif4 from './assets/navbarassets/notif4-pic.svg';
import profile from './assets/navbarassets/profile.svg';
import statusicon from './assets/navbarassets/status.svg';
import chat from './assets/navbarassets/chat.svg';

const Navbar = (props) => {

  const onLogout = (evt) => {
		const { logout } = props; 
		if(logout) {  
			logout(); 
		}
	};

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={appicon} className="App-logo" alt="logo" 
						height={50}
      					/>
          <p className='title'>TRADEHUB</p>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
            <li className='chaticon'>
            <Popover
              content={
              <Pane
                alignItems="left"
                width="80mm"
                justifyContent="center"
                flexDirection="column"
              ><br></br>
                <p className="notification-head"><strong>Messages</strong></p>
              <Dropdown.Menu >
              <Dropdown.Item >
                <img src={notif1} className="notif1-icon" alt="notif1" style={{height: 50}} />
                <div className="notif-submessage">
                <p className="notif-time">3:47 PM</p>
                <p className="notif-subhead">Jonathan Spike</p><n></n>
                <p className="notif-message">Hi! I'm interested in your...</p>
                </div>
              </Dropdown.Item>
              </Dropdown.Menu>
              </Pane>
            }
            ><img src={chat} className="chat-icon" alt="chat" 
                height={30}
                /></Popover>
            </li>
            <li className='notificon'>
                <Popover
                  content={
                    <Pane
                  alignItems="left"
                  width="80mm"
                  justifyContent="center"
                  flexDirection="column"
                ><br></br>
                  <p className="notification-head"><strong>Notifications</strong></p>
                <Dropdown.Menu >
                <Dropdown.Item >
                  <img src={notif1} className="notif1-icon" alt="notif1" style={{height: 50}} />
                  <div className="notif-submessage">
                  <p className="notif-time">3:47 PM</p>
                  <p className="notif-subhead">New Trade Offer</p><n></n>
                  <p className="notif-message">Jonathan Spike offers you..</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={notif2} className="notif1-icon" alt="notif1" style={{height: 50}} />
                  <div className="notif-submessage">
                  <p className="notif-time">3:47 PM</p>
                  <p className="notif-subhead">Message Request</p><n></n>
                  <p className="notif-message">You have a new message...</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  <img src={notif3} className="notif1-icon" alt="notif1" style={{height: 50}} />
                  <div className="notif-submessage">
                  <p className="notif-time">3:47 PM</p>
                  <p className="notif-subhead">Trade Offer Denied</p><n></n>
                  <p className="notif-message">Robert Downerie denied....</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  <img src={notif4} className="notif1-icon" alt="notif1" style={{height: 50}} />
                  <div className="notif-submessage">
                  <p className="notif-time">3:47 PM</p>
                  <p className="notif-subhead">New UPDATE</p><n></n>
                  <p className="notif-message">TradeHub has a new upd...</p>
                  </div>
                </Dropdown.Item>
                </Dropdown.Menu>
                </Pane>
              }
            ><img src={bell} className="bell-icon" alt="bell" 
            height={30}
            /></Popover>
            </li>
            <li className='profileicon'>
              <Popover
                  content={
                    <Pane
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                ><br></br>
                  <div className="userProfile">
                  <img src={profile} className="miniprofile-icon" alt="profile" 
                style={{height: 50}} 
                  /> 
                  <p className="status">Logged in   <img src={statusicon} className="status-icon" alt="status" 
                style={{height: 10}} 
                  /></p> 
                  <br></br>
                  <p className="userName">Evan Christian </p>
                  </div>
                  <br></br>
                  <br></br>
                <Dropdown.Menu >
                <Dropdown.Item divider />
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item >Settings</Dropdown.Item>
                <Dropdown.Item >Help & support</Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item onClick={onLogout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
                </Pane>
              }
              >
              <img src={profile} className="profile-icon" alt="profile" 
              style={{height: 30, borderRadius: 400/ 2}} 
                  /></Popover>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;