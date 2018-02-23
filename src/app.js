// React
import React from 'react';
import ReactDOM from 'react-dom';
// react-redux
import { Provider } from 'react-redux';
// Routing
import AppRouter from './routes/AppRouter';
// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css';
// Redux
import configureStore from './store/configureStore';
import { startSetExpenses  } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './firebase/firebase';

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

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

