import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.scss';

export function ContactPreview({ contact }) {
	return (
		<Link to={`/contact/${contact._id}`}>
			<div className={'contact-preview'}>
				<img src={`https://robohash.org/${contact.name}?set=set5`} alt="" />
				<span>{contact.name}</span>
			</div>
		</Link>
	);
}

export default ContactPreview;
