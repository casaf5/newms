import React, { Component } from 'react';
import { BitcoinService } from '../../services/bitcoin.service';
import './StatisticPage.scss';
import Chart from '../../cmps/Chart/Chart';
import { motion } from 'framer-motion';
class StatisticPage extends Component {
	state = {
		marketPriceData: null,
		confirmedTransactionsData: null
	};
	componentDidMount() {
		this.getMarketPrice();
		this.getConfirmedTransactions();
	}
	async getMarketPrice() {
		const marketPriceData = await BitcoinService.getMarketPrice();
		this.setState({ marketPriceData });
	}
	async getConfirmedTransactions() {
		const confirmedTransactionsData = await BitcoinService.getConfirmedTransactions();
		this.setState({ confirmedTransactionsData });
	}

	render() {
		const { marketPriceData, confirmedTransactionsData } = this.state;
		return (
			<motion.div
				className={'statistic-page'}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<span>
					<h2>Market Price</h2>
					<h3>Average USD market price across major bitcoin exchanges.</h3>
					{marketPriceData && <Chart data={marketPriceData} />}
				</span>
				<span>
					<h2>Confirmed Transactions Over The Last Two Months</h2>
					<h3>The number of daily confirmed Bitcoin transactions.</h3>
					{confirmedTransactionsData && <Chart data={confirmedTransactionsData} />}
				</span>
			</motion.div>
		);
	}
}

export default StatisticPage;
