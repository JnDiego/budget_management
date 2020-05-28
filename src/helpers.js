export const reviewBudget = (budget, remaining) => {
  let typeBudget;
  // 25%
  if (budget / 4 > remaining) {
    typeBudget = 'alert alert-danger';
  }
  // 50%
  else if (budget / 2 > remaining) {
    typeBudget = 'alert alert-warning';
  } else {
    typeBudget = 'alert alert-success';
  }

  return typeBudget;
};
