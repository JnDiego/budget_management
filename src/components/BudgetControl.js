import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({ budget, remainingBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={reviewBudget(budget, remainingBudget)}>Remaining: $ {remainingBudget}</div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remainingBudget: PropTypes.number.isRequired,
};

export default BudgetControl;
