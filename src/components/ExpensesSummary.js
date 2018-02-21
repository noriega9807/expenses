import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling: {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    };
};

// Higher Order Components (HOC)
export default connect(mapStateToProps)(ExpensesSummary);