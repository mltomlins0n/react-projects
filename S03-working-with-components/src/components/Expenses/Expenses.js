import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  function filterChangehandler(selectedOption) {
    setFilteredYear(selectedOption);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li className='expenses-list'>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
