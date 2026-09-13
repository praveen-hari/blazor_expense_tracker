import { useState } from 'react';
import { CATEGORIES } from '../constants';
import { todayISO } from '../utils/format';

const emptyForm = () => ({
  description: '',
  amount: '',
  category: 'food',
  date: todayISO(),
});

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const amount = parseFloat(form.amount);

    if (!form.description.trim()) {
      setError('Please enter a description.');
      return;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      setError('Please enter an amount greater than 0.');
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      description: form.description.trim(),
      amount,
      category: form.category,
      date: form.date,
    });

    setForm(emptyForm());
    setError('');
  }

  return (
    <form className="card expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="e.g. Grocery shopping"
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={form.amount}
            onChange={(e) => update('amount', e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={form.category}
          onChange={(e) => update('category', e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn-primary">
        Add Expense
      </button>
    </form>
  );
}
