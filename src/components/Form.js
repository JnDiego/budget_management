import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {
  //State para nombre del gasto
  const [expenseName, setExpenseName] = useState('');

  //State para cantidad del gasto
  const [expenseAmount, setExpenseAmount] = useState(0);

  //Objeto de error
  const [error, setError] = useState({});

  //Cuando el usuario agrega un gasto
  const setNewExpense = (event) => {
    event.preventDefault();

    //Validar
    if (expenseAmount < 1) {
      setError({ message: 'Budget must be greater than 0', state: true });
      return;
    } else if (isNaN(expenseAmount)) {
      setError({ message: 'No budget has been entered', state: true });
      return;
    } else if (expenseName.trim() === '') {
      setError({ message: 'No name added for expense', state: true });
      return;
    }

    // Construir gasto
    const expense = {
      name: expenseName,
      amount: expenseAmount,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    setExpense(expense);
    setCreateExpense(true);

    // Resetear el form
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <form action="" onSubmit={setNewExpense}>
      <h2>Add your expenses here...</h2>
      {error.state ? <Error message={error.message} /> : null}
      <div className="campo">
        <label htmlFor="expenseName">Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Transport"
          name="expenseName"
          id="expenseName"
          value={expenseName}
          onChange={(event) => setExpenseName(event.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="expenseAmount">Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="E.g. 300"
          name="expenseAmount"
          id="expenseAmount"
          value={expenseAmount}
          onChange={(event) => setExpenseAmount(parseInt(event.target.value, 10))}
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Add Expense" />
    </form>
  );
};

export default Form;
