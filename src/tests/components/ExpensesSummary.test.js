import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from  '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

describe('Test ExpensesSummary', () => {
    test('should correctly render ExpensesSummary with 1 expense', () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('should correctly render ExpensesSummary with multiple expenses', () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={234565} />);

        expect(wrapper).toMatchSnapshot();

    });
});