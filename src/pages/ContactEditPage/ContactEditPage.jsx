import './ContactEditPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contact.service.js';
import { getContactById, saveContact } from '../../store/actions/contactActions';
import { motion } from 'framer-motion';
class ContactEdit extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		id: ''
	};

	async componentDidMount() {
		const id = this.props.match.params.id;
		if (id) {
			await this.props.getContactById(id);
			const { contact } = this.props;
			this.setState({ ...contact });
		} else {
			let contact = contactService.getEmptyContact();
			this.setState({ ...contact });
		}
	}

	onChangeInput = (ev) => {
		const { value, name } = ev.target;
		this.setState({ [name]: value });
	};

	onSaveContact = async (ev) => {
		ev.preventDefault();
		const contact = await this.props.saveContact({ ...this.state });
		this.props.history.push(`/contact/${contact._id}`);
	};

	removeContact(id) {
		contactService.removeContact(id).then(() => this.props.history.push('/contact'));
	}

	render() {
		const { name, phone, email, _id } = this.state;
		return (
			<motion.div
				className="contact-edit"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<Link className="back-button" to={`/contact`}>
					<button>Go Back</button>
				</Link>
				{name && <img src={`https://robohash.org/${name}?set=set5`} alt="contact" />}
				<form onSubmit={this.saveContact}>
					<input
						type="text"
						placeholder="Full Name"
						name="name"
						value={name}
						onChange={this.onChangeInput}
						required
					/>
					<input
						type="tel"
						placeholder="Phone"
						name="phone"
						value={phone}
						onChange={this.onChangeInput}
						required
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={this.onChangeInput}
						required
					/>
				</form>
				<span>
					{this.props.match.params.id && (
						<button className="delete" onClick={() => this.removeContact(_id)}>
							Delete
						</button>
					)}
					<button onClick={this.onSaveContact}>Save</button>
				</span>
			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contact: state.contactReducer.contact
	};
};

const mapDispatchToProps = {
	getContactById,
	saveContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
