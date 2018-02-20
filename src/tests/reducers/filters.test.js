import moment from 'moment';

import filterReducer from '../../reducers/filters';

describe('Test filters reducer', () => {

    test('should setup default filter values', () => {

        const state = filterReducer(undefined, '@@INIT');
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should set sortBy to amount', () => {

        const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
        expect(state.sortBy).toBe('amount');
    });

    test('should set sortBy to date', () => {

        const currentState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
        };
        const action = { type: 'SORT_BY_DATE' };

        const state = filterReducer(currentState, action);
        expect(state.sortBy).toBe('date');
    });

    test('should set text filter', () => {

        const action = { type: 'SET_TEXT_FILTER', text: 'rent' };

        const state = filterReducer(undefined, action);
        expect(state.text).toBe('rent');
    });

    test('should set startDate', () => {

        const startDate = moment();
        const action = { type: 'SET_START_DATE', startDate };

        const state = filterReducer(undefined, action);
        expect(state.startDate).toBe(startDate);
    });

    test('should set endDate', () => {

        const endDate = moment();
        const action = { type: 'SET_END_DATE', endDate };

        const state = filterReducer(undefined, action);
        expect(state.endDate).toBe(endDate);
    });
});