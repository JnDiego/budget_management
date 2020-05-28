import React, { Fragment } from 'react';

const BudgetControl = ({ budget, remainingBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className="alert">Remaining: $ {remainingBudget}</div>
    </Fragment>
  );
};

export default BudgetControl;
