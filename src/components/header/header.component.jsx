import React from 'react'
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import './header.styles.css';
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.data';
import { connect } from 'react-redux';
import { LogOut } from '../../redux/user/user.actions';
import { toggleCarrello } from '../../redux/carrello/carrello.actions';
import PanelCarrello from '../panel-carrello/panel-carrello.component';
const Header = ({user, setLogout, hiddenCart, toggleCart}) => {
	const logout = () => {
		auth.signOut();
		setLogout();
	}
	return(
		<div className = "header">
			<Link className='img-container' to="/">
				<Logo className = "logo"/>
			</Link>
			<div className = 'options'>
				<Link className='option' to = "/shop">ARTICOLI</Link>{
					user != null ? (
						<div className='option' onClick={logout}>LOGOUT</div>
					): (
						<Link className='option' to = "/login">LOGIN</Link>
					)
				}
				
			</div>
			{
				hiddenCart ? null : (<PanelCarrello/>)
}
		</div>
		);
};
const mapStateToProps = (state) =>({
	user: state.user.loggedUser,
	hiddenCart: state.cart.hidden
})

const mapDispatchToProps = (dispatch) => ({
	setLogout: () => dispatch(LogOut()),
	toggleCart: () => dispatch(toggleCarrello())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);