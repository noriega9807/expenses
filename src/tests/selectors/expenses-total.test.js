import expensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';


describe('Test expenses selector', () => {

    test('should return 0 if no expenses', () => {

        const result = expensesTotal([]);
        expect(result).toBe(0);
    });

    test('should sum expenses amount', () => {

        const result = expensesTotal(expenses);
        expect(result).toBe(114195);
    });

    test('should sum single expense', () => {

        const result = expensesTotal([expenses[0]]);
        expect(result).toBe(195);
    });
    
});