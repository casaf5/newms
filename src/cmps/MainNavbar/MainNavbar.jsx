import React, { Component } from 'react';
import logoImg from '../../assets/img/logo.png';
import './MainNavbar.scss';
import { NavLink, withRouter } from 'react-router-dom';
class _MainNavbar extends Component {
	render() {
		return (
			<nav className={'main-navbar container'}>
				<NavLink className="logo pointer" to="/">
					<img src={logoImg} alt="" />
				</NavLink>
				<span className="pages">
					<NavLink exact to="/statistics">
						Statistics
					</NavLink>
					<NavLink exact to="/contact">
						Contacts
					</NavLink>
					<NavLink exact to="/profile">
						Profile
					</NavLink>
				</span>
			</nav>
		);
	}
}

export default withRouter(_MainNavbar);
