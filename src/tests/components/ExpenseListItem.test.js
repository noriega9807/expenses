import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from  '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

describe('Test ExpenseListItem', () => {
    test('should render ExpenseList with expenses', () => {
        const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);

        expect(wrapper).toMatchSnapshot();

    });
});