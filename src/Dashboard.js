import './Dashboard.css';
import TradeMenu from './tradeMenu';

import appicon from './assets/appicon.svg';
import cart from './assets/cart.svg';
import bell from './assets/bell.svg';
import profile from './assets/navbarassets/profile.svg';
import statusicon from './assets/navbarassets/status.svg';
import notif1 from './assets/navbarassets/notif1-pic.svg';
import notif2 from './assets/navbarassets/notif2-pic.svg';
import notif3 from './assets/navbarassets/notif3-pic.svg';
import notif4 from './assets/navbarassets/notif4-pic.svg';

import { Popover, Pane} from 'evergreen-ui'
import { Dropdown } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const Dashboard = (props) => { 

	const onLogout = (evt) => {
		const { logout } = props; 
		if(logout) {  
			logout(); 
		}
	};

	document.body.style.backgroundColor = "#0E0741";
	return(
		<>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			<div className = "header">
				<div className = "navbar">
					<li className="logo"><img src={appicon} className="App-logo" alt="logo" 
						height={50}
      					/></li>
					<li className = "title">TRADEHUB</li>
					<li className="cart"><img src={cart} className="cart-icon" alt="cart" 
						height={50}
      					/></li>
					<li className="bell"><Popover
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
						height={50}
      					/></Popover>
					</li>
					<li className="profile">
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
							<Dropdown.Item> Messages</Dropdown.Item>
							<Dropdown.Item >My Items</Dropdown.Item>
							<Dropdown.Item>Trade History</Dropdown.Item>
							<Dropdown.Item divider />
							<Dropdown.Item >Settings</Dropdown.Item>
							<Dropdown.Item >Help & support</Dropdown.Item>
							<Dropdown.Item onClick={onLogout}>Log Out</Dropdown.Item>
						  </Dropdown.Menu>
							</Pane>
						}
    				>
						<img src={profile} className="profile-icon" alt="profile" 
						style={{height: 50, borderRadius: 400/ 2}} 
      					/></Popover></li>
				</div>
				<br></br>
			</div>
			<br></br>
			<div className="body">
				<TradeMenu />
			</div>
		</>
	)
};

export default Dashboard;