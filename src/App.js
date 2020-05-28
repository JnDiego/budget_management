import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
  // Definir el state
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (createExpense) {
      //Agrega nuevo presupuesto
      setExpenses([...expenses, expense]);
      //Resta del presupuesto actual
      const remaining = remainingBudget - expense.amount;
      setRemainingBudget(remaining);
      //Reseteo a false
      setCreateExpense(false);
    }
  }, [createExpense, expense, expenses, remainingBudget]);

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
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remainingBudget={remainingBudget} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
