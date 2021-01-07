import './SignUpPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../store/actions/userActions';
import bitcoinImg from '../../assets/img/signup.png';
import { motion } from 'framer-motion';
class SignUpPage extends Component {
	state = {
		name: ''
	};

	onChangeInput = (ev) => {
		const { value } = ev.target;
		this.setState({ name: value });
	};

	onSignUp = async (ev) => {
		ev.preventDefault();
		await this.props.addUser({ ...this.state });
		this.props.history.push('/');
	};

	render() {
		return (
			<motion.section
				className="signup flex column align-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<img className="bitcoin-img" src={bitcoinImg} alt="bitcoin-img" />
				<motion.form
					onSubmit={this.onSignUp}
					className="flex column align-center"
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.9, delay: 0.2 }}
				>
					<div className="signup-form flex column align-center">
						<label htmlFor="name">
							<h2>Sign up in order to get started</h2>
						</label>
						<input
							type="text"
							value={this.state.name}
							placeholder="Enter your name"
							onChange={this.onChangeInput}
						/>
					</div>
					<button type="submit" className="save-btn btn">
						Save
					</button>
				</motion.form>
			</motion.section>
		);
	}
}

const mapDispatchToProps = {
	addUser
};

export default connect(null, mapDispatchToProps)(SignUpPage);
