import { useState } from "react";
import logo from './assets/logo.svg';
import fblogo from './assets/fblogo.svg';
import Dashboard from "./Dashboard";
import DashboardTest from './dashboard-testcode'
import Navbary from './navbar';

import googlelogo from './assets/googlelogo.svg';
import Alert from './Alert';
import './logincss.css';

function Login () {
	const [showDashboard, setShowDashboard] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const onChange = (evt) => {
		const value = evt.target.value;
		const name = evt.target.name;
		setUser({
			...user,
			[name]: value 
		});
	};

	const sendLogin = async (user) => {
		console.log(user);

		const url = 'https://reqres.in/api/login';
		const params = {
			"email": user.email,
			"password": user.password
		}

		fetch(url, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(params), 
		})
		.then((response) => response.json())
		.then((data) => {
		  	if(data && data.token) {
		  		setShowDashboard(true);
		  	}else{
				showAlert(true, 'danger', 'Please enter the correct credentials.'); 
		  	}
		})
		.catch((error) => {
		  console.error('Error:', error);
		});
	};

	const handleUserLogin = () => {
		sendLogin(user);
	};

	const handleLogout = () => {
		setShowDashboard(false);
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const fbPage = () => {
		window.location.href = "https://www.facebook.com/" ;
	}

	const googlePage = () => {
		window.location.href = "https://accounts.google.com/v3/signin/identifier?dsh=S1862414625%3A1669429597644239&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAupQa1WrUv4c3eJXtDQSADOQIiYBYIlRS-V5CjzrW5Ar5ioqyKOEcE0FAUyL-WwNA1sTQkRfw" ;
	}
	
	document.body.style.backgroundColor = "#171336";
	return !showDashboard ? ( 
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
							onChange={onChange}
							data-testid="email"
							className="email"
							name="email"
						/><br />

						<br></br>
						<input 
							placeholder="Enter password"
							type="password"
							onChange={onChange}
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
					<button
						onClick={handleUserLogin} 
						data-testid="send-user-login"
						className="login-btn"
					>
						LOG IN
					</button>
					<br></br><br></br>
					<p>CREATE NEW ACCOUNT</p>
				</div>
			</div>
		</>
	) : (
		<DashboardTest logout={handleLogout}/> 
	)
};

export default Login;