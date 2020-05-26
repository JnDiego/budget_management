import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {
  // Definir el state
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  // Función que se ejecuta cuando se agrega un nuevo gasto
  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question setBudget={setBudget} setRemainingBudget={setRemainingBudget} updateQuestion={updateQuestion} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addNewExpense={addNewExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
