import moment from 'moment';

import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

// {
//     description: '',
//     amount: 'date',
//     note: moment().startOf('month'),
//     createdAt: moment().endOf('month')
// }

describe('Test expenses reducer', () => {

    test('should setup default state', () => {

        const state = expensesReducer(undefined, '@@INIT');
        expect(state).toEqual([]);
    });

    test('should remove expense by id', () => {

        const action = {
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual([ expenses[0], expenses[2]]);
    });

    test('should not remove expense by id', () => {

        const action = {
            type: 'REMOVE_EXPENSE',
            id: '5'
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });

    test('should add an expense', () => {

        const expense = {
            id: '123',
            description: 'Hola como estas',
            amount: 50000,
            note: '',
            createdAt: 20000
        };

        const action = {
            type: 'ADD_EXPENSE',
            expense
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual([...expenses, expense]);
    });

    test('should edit an expense', () => {

        const amount = 10293809;
        const action = {
            type: 'EDIT_EXPENSE',
            id: expenses[1].id,
            updates: {
                amount
            }
        };

        const state = expensesReducer(expenses, action);
        expect(state[1].amount).toBe(amount);
    });

    test('should not edit an expense if id not found', () => {

        const amount = 10293809;
        const action = {
            type: 'EDIT_EXPENSE',
            id: '-1',
            updates: {
                amount
            }
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });

    test('should set expenses', () => {
        const action = {
            type: 'SET_EXPENSES',
            expenses: [expenses[1]]
        };
        const state = expensesReducer(expenses, action);

        expect(state).toEqual([expenses[1]]);
    }); 
});