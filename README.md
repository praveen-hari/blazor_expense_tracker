# Expense Tracker (Blazor Server)

Lightweight expense tracking web app using Blazor Server, ASP.NET Core Identity, and EF Core (SQLite by default).

**Status:** Backend scaffolding, Identity, EF Core models, and initial migration applied.

**Repository:** https://github.com/praveen-hari/blazor_expense_tracker

## Prerequisites

- .NET 9 SDK
- `dotnet-ef` tool (install with `dotnet tool install --global dotnet-ef`)

## Quick start

1. Build and restore packages:

```bash
cd ExpenseTracker
dotnet restore
dotnet build
```

2. Apply database migrations (creates `expense_tracker.db` in the project folder):

```bash
dotnet ef database update
```

3. Run the app:

```bash
dotnet run
```

Open the app in the browser at the address printed by `dotnet run` (usually `https://localhost:5001`).

## Configuration

- Connection string is in [ExpenseTracker/appsettings.json](ExpenseTracker/appsettings.json) under `ConnectionStrings:DefaultConnection`.
- The template uses SQLite by default (`Data Source=expense_tracker.db`).

## Migrations

To add a new migration:

```bash
dotnet ef migrations add <Name> --output-dir Data/Migrations
dotnet ef database update
```

If you need the `dotnet-ef` tool locally for this project:

```bash
dotnet tool install --global dotnet-ef
```

## Next steps (suggested)

- Implement registration/login UI pages and wire Identity UI or custom pages.
- Add CRUD pages for expenses and categories.
- Add unit/integration tests and CI (GitHub Actions).

## Files of interest

- [ExpenseTracker/Program.cs](ExpenseTracker/Program.cs)
- [ExpenseTracker/Data/ApplicationDbContext.cs](ExpenseTracker/Data/ApplicationDbContext.cs)
- [ExpenseTracker/Models/ApplicationUser.cs](ExpenseTracker/Models/ApplicationUser.cs)
- [ExpenseTracker/Models/Expense.cs](ExpenseTracker/Models/Expense.cs)
- [ExpenseTracker/Models/Category.cs](ExpenseTracker/Models/Category.cs)

## License

MIT
