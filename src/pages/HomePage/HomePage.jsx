import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homePageImg from '../../assets/img/hero.png';
import './HomePage.scss';
import { motion } from 'framer-motion';
import { eventBus } from '../../services/eventbus.service';
import { loadUser, addUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';

class _HomePage extends Component {
	state = {
		name: ''
	};
	componentDidMount() {
		this.getUser();
	}
	async getUser() {
		const user = await this.props.loadUser();
		if (!user) {
			this.props.history.push('/signup');
			return;
		}
		eventBus.emit('user loggedIn', user);
	}

	render() {
		return (
			<motion.div
				className={'home-page container'}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<span className={'hero'}>
					<img className={'hero-img'} src={homePageImg} alt="" />
					<span>
						<h1>Mr. Bitcoin</h1>
						<h3>Your one and only bitcoin wallet.</h3>
						<Link to={`/contact`} exact>
							<button>Get Started</button>
						</Link>
					</span>
				</span>
			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user
	};
};

const mapDispatchToProps = {
	loadUser,
	addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(_HomePage);
