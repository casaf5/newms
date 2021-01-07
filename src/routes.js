import HomePage from './pages/HomePage/';
import ContactPage from './pages/ContactPage/';
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage';
import StatisticPage from './pages/StatisticPage/';
import ContactEditPage from './pages/ContactEditPage/ContactEditPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import UserProfile from './pages/Profile/Profile';

const Routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/contact',
        component: ContactPage
    },
    {
        path: '/contact/edit/:id?',
        component: ContactEditPage
    },
    {
        path: '/contact/:id',
        component: ContactDetailsPage
    },
    {
        path: '/statistics',
        component: StatisticPage
    },
    {
        path: '/signup',
        component: SignUpPage
    },
    {
        path: '/profile',
        component: UserProfile
    }

]

export default Routes
