// React
import React from 'react';
import ReactDOM from 'react-dom';
// react-redux
import { Provider } from 'react-redux';
// Routing
import AppRouter, {history} from './routes/AppRouter';
// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// Redux
import configureStore from './store/configureStore';
import { startSetExpenses  } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
// Firebase
import { firebase } from './firebase/firebase';
// Components
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// store.dispatch(addExpense( { description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense( { description: 'Gas bill',  createdAt: 1500 }));
// store.dispatch(addExpense( { description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// });

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

