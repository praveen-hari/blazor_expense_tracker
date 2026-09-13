import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="card empty-state">
        <p>No expenses yet.</p>
        <p className="muted">Add your first expense to get started.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
