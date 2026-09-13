import { useMemo, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import CategoryChart from './components/CategoryChart';
import Filters from './components/Filters';
import { useLocalStorage } from './hooks/useLocalStorage';
import { monthKey } from './utils/format';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [monthFilter, setMonthFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  function addExpense(expense) {
    setExpenses((prev) => [expense, ...prev]);
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  const months = useMemo(() => {
    const set = new Set(expenses.map((e) => monthKey(e.date)).filter(Boolean));
    return [...set].sort().reverse();
  }, [expenses]);

  const filtered = useMemo(() => {
    return expenses
      .filter((e) => monthFilter === 'all' || monthKey(e.date) === monthFilter)
      .filter((e) => categoryFilter === 'all' || e.category === categoryFilter)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [expenses, monthFilter, categoryFilter]);

  const total = useMemo(
    () => filtered.reduce((sum, e) => sum + e.amount, 0),
    [filtered],
  );
  const average = filtered.length ? total / filtered.length : 0;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
        <p className="muted">Track where your money goes.</p>
      </header>

      <main className="layout">
        <aside className="sidebar">
          <ExpenseForm onAdd={addExpense} />
        </aside>

        <section className="content">
          <Summary total={total} count={filtered.length} average={average} />

          <Filters
            months={months}
            monthFilter={monthFilter}
            categoryFilter={categoryFilter}
            onMonthChange={setMonthFilter}
            onCategoryChange={setCategoryFilter}
          />

          <CategoryChart expenses={filtered} />
          <ExpenseList expenses={filtered} onDelete={deleteExpense} />
        </section>
      </main>
    </div>
  );
}
