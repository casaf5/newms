import React, { Component } from 'react';
import './TransferFund.scss';

export default class TransferFund extends Component {
	state = {
		fund: ''
	};

	onTransferFund = (ev) => {
		ev.preventDefault();
		const { fund } = this.state;
		this.props.transferFund(fund);
		this.setState({ fund: '' });
	};

	changeFund = (ev) => {
		const { value, name } = ev.target;
		this.setState({ [name]: +value });
	};

	render() {
		return (
			<section className="transfer-fund flex column auto-center">
				<h3>Wanna transfer coins to {this.props.contactName}? </h3>
				<form onSubmit={this.onTransferFund}>
					<input
						name="fund"
						type="number"
						onChange={this.changeFund}
						value={this.state.fund}
						placeholder="Amount to transfer"
					/>
					<button type="submit">Transfer</button>
				</form>
			</section>
		);
	}
}
