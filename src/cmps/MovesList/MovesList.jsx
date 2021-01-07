import './MovesList.scss';
import React from 'react';
import MovePreview from '../MovePreview';

export default function MovesList(props) {
	let moves = props.moves;
	const isInContact = props.isInContact;
	const contactId = props.contactId;
	if (isInContact) {
		moves = moves.filter((move) => move.toId === contactId);
	}
	if (!moves.length) return <div className="no-moves" />;
	return (
		<ul className="moves-list clean-list">
			<h2>Your Moves:</h2>
			{moves.map((move, idx) => <MovePreview move={move} isInContact={isInContact} key={idx} />)}
		</ul>
	);
}
