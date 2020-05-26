import React, { Fragment, useState } from 'react';

const Question = () => {
  //Definir el state
  const [amount, setAmount] = useState(0);

  const [error, setError] = useState(false);

  // Función que lee el presupuesto
  const defineBudget = (event) => {
    setAmount(parseInt(event.target.value, 10));
  };

  // Submit para definir el presupuesto
  const addBudget = (event) => {
    event.preventDefault();

    // Validar
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }

    // Si se pasa la validación
    setError(false);
  };

  return (
    <Fragment>
      <h2>Enter your budget</h2>

      {/* { error ?  : null} */}

      <form action="" onSubmit={addBudget}>
        <input type="number" className="u-full-width" placeholder="Enter your budget" onChange={defineBudget} />

        <input type="submit" value="Define budget" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

export default Question;
