import { useState } from "react";
import logo from './assets/logo.svg';
import fblogo from './assets/fblogo.svg';
import Dashboard from "./Dashboard";
import DashTesty from './dashboard-testcode'

import googlelogo from './assets/googlelogo.svg';
import Alert from './Alert';
import './logincss.css';

import { Link } from 'react-router-dom';

function LoginTest () {

	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const fbPage = () => {
		window.open("https://www.facebook.com/");
	}

	const googlePage = () => {
		window.open("https://accounts.google.com/v3/signin/identifier?dsh=S1862414625%3A1669429597644239&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAupQa1WrUv4c3eJXtDQSADOQIiYBYIlRS-V5CjzrW5Ar5ioqyKOEcE0FAUyL-WwNA1sTQkRfw");
	}
	
	document.body.style.backgroundColor = "#171336";
	return( 
		<>
			<div className="center">
				<div className="left">
					<div className="container">
						<h1>Welcome to TradeHub</h1>
						<img src={logo} className="App-logo" alt="logo" 
						height={350}
      					/>
					</div>
				</div>
				<div className='right'>
				{alert.show && <Alert {...alert} removeAlert={showAlert}/>}
					<h1>Get Started</h1>
					<form className="loginform">
						<input 
							placeholder="Enter Email"
							type="text"
							data-testid="email"
							className="email"
							name="email"
						/><br />

						<br></br>
						<input 
							placeholder="Enter password"
							type="password"
							data-testid="password"
							className="password"
							name="password"
						/>
						<br></br>
						<br></br>
						<p className="forgotpass">Forgot Password?</p>
						<p className="loginoption">Login with:</p>
						<br></br>
						<div className="fb-login" onClick={fbPage}>
							<img src={fblogo} className="fb-logo" alt="fblogo" height={30}/>
							<p className="fb">Facebook</p>
						</div>
						<div className="google-login" onClick={googlePage}>
							<img src={googlelogo} className="google-logo" alt="glogo" height={30}/>
							<p className="google">Google</p>
						</div>
						<br/><br/>
					</form>
					<br></br>
                    <Link to="/"><button
						data-testid="send-user-login"
						className="login-btn"
					>
						LOG IN
					</button></Link>
					<br></br><br></br>
					<p>CREATE NEW ACCOUNT</p>
				</div>
			</div>
		</>
	) 
};

export default LoginTest;