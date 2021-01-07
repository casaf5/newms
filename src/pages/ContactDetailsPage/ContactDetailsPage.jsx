import './ContactDetailsPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventBus } from '../../services/eventbus.service';
import { Link } from 'react-router-dom';
import { getContactById, deleteContact } from '../../store/actions/contactActions';
import { loadUser, addMove } from '../../store/actions/userActions';
import TransferFund from '../../cmps/TransferFund';
import MoveList from '../../cmps/MovesList';
import { motion } from 'framer-motion';
class ContactDetailsPage extends Component {
	async componentDidMount() {
		this.getUser();
		const contactId = this.props.match.params.id;
		if (contactId) {
			await this.props.getContactById(contactId);
		}
		await this.props.loadUser();
	}

	deleteContact = async () => {
		const { contactId } = this.props.match.params;
		await this.props.deleteContact(contactId);
		this.props.history.push('/contacts');
	};

	transferFund = async (fund) => {
		const move = {
			toId: this.props.contact._id,
			to: this.props.contact.name,
			amount: fund,
			at: Date.now()
		};
		await this.props.addMove(move);
	};

	async getUser() {
		const user = await this.props.loadUser();
		if (!user) {
			this.props.history.push('/signup');
			return;
		}
		eventBus.emit('user loggedIn', user);
	}
	render() {
		const { user } = this.props;
		const { contact } = this.props;
		if (!contact) return <div>Loading...</div>;
		return (
			<motion.div
				className="contact-details flex column"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<img src={`https://robohash.org/${contact.name}?set=set5`} alt="" />
				<span className="flex details">
					<p>{contact.name}</p>
					<p>{contact.phone}</p>
					<p>{contact.email}</p>
					<span>
						<Link to={`/contact`}>
							<button>Back</button>
						</Link>
						<Link to={`/contact/edit/${contact._id}`}>
							<button>Edit</button>
						</Link>
					</span>
				</span>
				<span className="flex auto-center">
					<TransferFund maxCoins={user.coins} transferFund={this.transferFund} contactName={contact.name} />
					<MoveList moves={user.moves} contactId={contact._id} isInContact={true} />
				</span>
			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contact: state.contactReducer.contact,
		user: state.userReducer.user
	};
};

const mapDispatchToProps = {
	getContactById,
	deleteContact,
	loadUser,
	addMove
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);
