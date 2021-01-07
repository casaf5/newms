import './assets/scss/global.scss';
import Routes from './routes';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavbar from './cmps/MainNavbar/MainNavbar';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

function _App() {
	return (
		<div className="App container">
			<Router>
				<MainNavbar />
				<AnimatePresence>
					<Switch>
						{Routes.map((route, key) => (
							<Route exact path={route.path} component={route.component} key={key} />
						))}
					</Switch>
				</AnimatePresence>
			</Router>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user
	};
};

export default connect(mapStateToProps, null)(_App);
