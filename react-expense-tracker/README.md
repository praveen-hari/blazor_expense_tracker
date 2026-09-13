# Expense Tracker (React)

A clean, responsive expense tracker built with **React 19** and **Vite**. Add, filter,
and visualise your spending — all persisted locally in the browser via `localStorage`.

## Features

- **Add expenses** with description, amount, date, and category (with inline validation)
- **Delete expenses** individually
- **Summary stats** — total spent, transaction count, and average per transaction
- **Filters** — by month and by category
- **Category breakdown** — horizontal bar chart of spending per category
- **Persistent** — data is saved to `localStorage` and survives reloads
- **Responsive** — adapts from desktop two-column to single-column on mobile

## Tech Stack

- React 19 + Vite 8
- Plain CSS (no UI framework)
- Browser `localStorage` for persistence

## Project Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx    # Add-expense form with validation
│   ├── ExpenseList.jsx    # List container + empty state
│   ├── ExpenseItem.jsx    # Single expense row
│   ├── Summary.jsx        # Total / count / average stat cards
│   ├── CategoryChart.jsx  # Spending-by-category bar chart
│   └── Filters.jsx        # Month + category filters
├── hooks/
│   └── useLocalStorage.js # State synced to localStorage
├── utils/
│   └── format.js          # Currency, date, and month helpers
├── constants.js           # Category definitions + colors
├── App.jsx                # App shell + state orchestration
└── App.css                # Styles
```
