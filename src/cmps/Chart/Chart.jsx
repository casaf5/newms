import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';
import { motion } from 'framer-motion';
import './Chart.scss';

export default function Chart({ data }) {
	return (
		<motion.div
			className={'data-chart'}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.9, delay: 0.2 }}
		>
			{data && (
				<Sparklines data={data}>
					<SparklinesLine style={{ fill: '#f9cb07', fillOpacity: 1, height: 350, width: 500 }} />
					<SparklinesNormalBand />
				</Sparklines>
			)}
		</motion.div>
	);
}
