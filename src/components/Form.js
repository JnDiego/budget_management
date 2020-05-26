import React, { useState } from 'react';

const Form = () => {
  return (
    <form action="">
      <h2>Add your expenses here...</h2>
      <div className="campo">
        <label htmlFor="expenseName">Expense Name</label>
        <input type="text" className="u-full-width" placeholder="E.g. Transport" name="expenseName" id="expenseName" />
      </div>
      <div className="campo">
        <label htmlFor="expenseAmount">Expense Amount</label>
        <input type="number" className="u-full-width" placeholder="E.g. 300" name="expenseAmount" id="expenseAmount" />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Add Expense" />
    </form>
  );
};

export default Form;
