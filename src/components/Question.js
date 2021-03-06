import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ setBudget, setRemainingBudget, updateQuestion }) => {
  //Definir el state
  const [amount, setAmount] = useState(0);

  //Objeto de error
  const [error, setError] = useState({});

  // Función que lee el presupuesto
  const defineBudget = (event) => {
    setAmount(parseInt(event.target.value, 10));
  };

  // Submit para definir el presupuesto
  const addBudget = (event) => {
    event.preventDefault();

    // Validar
    if (amount < 1) {
      setError({ message: 'Budget must be greater than 0', state: true });
      return;
    } else if (isNaN(amount)) {
      setError({ message: 'No budget has been entered', state: true });
      return;
    }

    // Si se pasa la validación
    setError({ message: '', state: false });
    setBudget(amount);
    setRemainingBudget(amount);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Enter your budget</h2>

      {error.state ? <Error message={error.message} /> : null}

      <form action="" onSubmit={addBudget}>
        <input type="number" className="u-full-width" placeholder="Enter your budget" onChange={defineBudget} />

        <input type="submit" value="Define budget" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemainingBudget: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default Question;
