import React, {useState  }from 'react'

import './register-form.styles.css';
import { auth, getUserProfile } from '../../firebase/firebase.data';

const RegisterForm = () => {
	const [credenziali, setCredenziali] = useState({
		nome: '',
		cognome: '',
		email: '',
		password: ''
	})
	const {nome, cognome, email, password} = credenziali;

	const inviaDati = async event => {
		event.preventDefault();

		const register = await auth.createUserWithEmailAndPassword(email, password);
		
		getUserProfile(register.user,{nome, cognome})
	}

	const handleChange = event => {
		const {value, nome} = event.target;

		setCredenziali({...credenziali, [nome]: value})
	}
	
	return(
		<div className = "register-form">
			<h2>Non sono registrato</h2>
			<span>Compila i campi sottostanti</span>

			<form onSubmit={inviaDati}>
				<div className='form-group'>
					<label className='form-input-label'>Nome</label>
					<input type = "text" name = "nome" onChange={handleChange} value = {nome} required/>

					<label className='form-input-label'>Cognome</label>
					<input type = "text" name = "cognome" onChange={handleChange} value = {cognome} required/>

					<label className='form-input-label'>Indirizzo e-mail</label>
					<input type = "email" name = "email" onChange={handleChange} value = {email} required/>

					<label className='form-input-label'>Password</label>
					<input type = "password" name = "password" onChange={handleChange} value = {password} required/>
					
					<button className='button' type="submit">REGISTRATI</button>
				</div>
			</form>
		</div>
	);
};
export default RegisterForm;