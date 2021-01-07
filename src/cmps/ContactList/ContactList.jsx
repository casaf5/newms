import ContactPreview from '../ContactPreview/ContactPreview';
import './ContactList.scss';
import { motion } from 'framer-motion';

export function ContactList({ contacts }) {
	return (
		<motion.span
			className="contact-list"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.9, delay: 0.2 }}
		>
			<ul>
				{contacts.map((contact) => (
					<li key={contact._id}>
						<ContactPreview contact={contact} />
					</li>
				))}
			</ul>
		</motion.span>
	);
}
