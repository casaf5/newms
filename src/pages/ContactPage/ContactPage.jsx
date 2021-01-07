import { React, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadContacts } from '../../store/actions/contactActions';
import { ContactList } from '../../cmps/ContactList/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter';
import { motion } from 'framer-motion';
import './ContactPage.scss';

class ContactPage extends Component {
	state = {
		filterBy: null
	};
	componentDidMount() {
		this.loadContacts();
	}

	loadContacts() {
		this.props.loadContacts(this.state.filterBy);
	}
	onSetFilter = (filterBy) => {
		this.setState({ filterBy }, this.loadContacts);
	};

	render() {
		const { contacts } = this.props;
		return (
			<motion.div
				className={'contact-page'}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
			>
				<ContactFilter onSetFilter={this.onSetFilter} />
				<Link to={`/contact/edit`}>
					<button>+</button>
				</Link>
				{contacts && <ContactList contacts={contacts} />}
			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contacts: state.contactReducer.contacts
	};
};

const mapDispatchToProps = {
	loadContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
