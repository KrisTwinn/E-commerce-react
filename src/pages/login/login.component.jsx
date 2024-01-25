import React from 'react'
import LoginForm from '../../components/login-form/login-form.component';
import RegisterForm from '../../components/register-form/register-form.component';

import './login.styles.css';

const Login = () => {
	return(
		<div className = "login">
		<LoginForm/>
		<RegisterForm/>
		</div>
	);
};
export default Login;