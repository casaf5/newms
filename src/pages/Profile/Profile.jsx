import { BitcoinService } from '../../services/bitcoin.service';
import './Profile.scss';
import { motion } from 'framer-motion';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/userActions';
import MoveList from '../../cmps/MovesList';

class _Profile extends Component {
	state = {
		rate: null
	};

	async componentDidMount() {
		await this.props.loadUser();
		const rate = await BitcoinService.getRate();
		this.setState({ rate });
	}
	get lastUserMoves() {
		return JSON.parse(JSON.stringify(this.props.user.moves)).slice(0, 3);
	}
	get userMoves() {
		return JSON.parse(JSON.stringify(this.props.user.moves));
	}
	render() {
		const { user } = this.props;
		const { rate } = this.state;
		if (!user) return <div>Loading...</div>;
		return (
			<motion.div
				className="profile flex auto-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<img src={`https://robohash.org/${user.name}?set=set5`} alt="" />
				<span className="flex column justify-center">
					<div>Hello {user.name}</div>
					<p>Coins: {user.coins}</p>
					<p> BTC: {rate}</p>
				</span>
				<MoveList moves={this.lastUserMoves} isInContact={false} />
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
	loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(_Profile);
