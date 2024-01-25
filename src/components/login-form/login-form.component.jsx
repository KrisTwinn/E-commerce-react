import React, {useState} from 'react'
import {auth, getUserProfile, signInWithGoogle} from '../../firebase/firebase.data'
import './login-form.styles.css';
import Login from '../../pages/login/login.component';
import { connect } from 'react-redux';
import { Button } from '../../styled-components/button';

const LoginForm = ({setLogin}) => {
	const [credenziali, setCredenziali] = useState({
		email: '',
		password: ''
	})

	const {email, password} = credenziali;

	const inviaDati = async event => {
		event.preventDefault();

		const login = await auth.signInWithEmailAndPassword(email, password);

		setLogin(login.user)
	}

	const loginGoogle = async () => {
		const userLogin = await signInWithGoogle()

		const {family_name, given_name} = userLogin.additionalUserInfo.profile
		getUserProfile(userLogin.user, {cognome: family_name, nome : given_name})

		setLogin(userLogin.user)
	}

	const handleChange = event => {
		const {value, name} = event.target;

		setCredenziali({...credenziali, [name]: value})
	}
	return(
		<div className = "login-form">
			<h2>Hai già un account?</h2>
			<span>Utilizza email e password</span>

			<form onSubmit={inviaDati}>
				<div className='form-group'>
					<label className='form-input-label1'>Indirizzo email</label>
					<input type = "text" name = "email" value = {email} required onChange={handleChange}/>

					<label className='form-input-label'>Password</label>
					<input type = "password" name = "password" value = {password} required onChange={handleChange}/>

					<div className='buttons'>
						<Button className='button' data-testid="login-button" type="sibmit">LOG IN</Button>
						<Button className='button' type="button" onClick={loginGoogle}>LOG IN CON GOOGLE</Button>
					</div>
					<button className='button' type="submit">LOG IN</button>
				</div>

			</form>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setLogin: (user) => dispatch(Login(user))
})
export default connect(null, mapDispatchToProps) (LoginForm);