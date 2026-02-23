# Code Studio instructions — Expense Tracker

Purpose: Provide immediate, actionable context for AI coding agents working on this repo.

**Big Picture**
- **Architecture:** Blazor Server app using .NET 9, server-side interactive Razor Components, ASP.NET Core Identity, and EF Core (SQLite). See [ExpenseTracker/Program.cs](ExpenseTracker/Program.cs#L1-L40).
- **Data layer:** `ApplicationDbContext` (EF Core IdentityDbContext) exposes `Categories` and `Expenses`. Migrations live under [ExpenseTracker/Data/Migrations](ExpenseTracker/Data/Migrations).
- **Auth & user model:** Identity uses `ApplicationUser` (`ExpenseTracker/Models/ApplicationUser.cs`) and is wired to EF stores in `Program.cs`.
- **Important behaviors:** App calls `db.Database.Migrate()` at startup to auto-apply migrations (creates `expense_tracker.db` if missing).

**Critical files to inspect**
- [ExpenseTracker/Program.cs](ExpenseTracker/Program.cs) — DI, Identity configuration, middleware, and component routing.
- [ExpenseTracker/Data/ApplicationDbContext.cs](ExpenseTracker/Data/ApplicationDbContext.cs) — schema conventions (precision, defaults, relationships).
- [ExpenseTracker/Models/Expense.cs](ExpenseTracker/Models/Expense.cs) — shape of the primary domain model (note `UserId` and nullable `CategoryId`).
- [ExpenseTracker/Components](ExpenseTracker/Components) — UI components and layouts for interactive server rendering.

**Developer workflows (commands)**
- Build & run locally (requires .NET 9 SDK):

```bash
cd ExpenseTracker
dotnet restore
dotnet build
dotnet run
```

- Apply migrations (recommended during development):

```bash
cd ExpenseTracker
dotnet tool install --global dotnet-ef        # if needed
dotnet ef database update
```

**Project-specific conventions & patterns**
- Database: SQLite file `expense_tracker.db` created in project folder. Startup code auto-applies migrations; agents should prefer adding migrations under `Data/Migrations` and avoid manual deletion of the DB unless resetting state is intended.
- Categories are optional on expenses: deletion behavior is `SetNull` — avoid assuming cascade deletion.
- Identity password policy is stricter than default (configured in `Program.cs`): min length 8, digit and uppercase required.
- Razor components use server interactive mode (`AddInteractiveServerComponents`) — prefer server-side rendering patterns when adding components and avoid client-only assumptions.

**Integration points & runtime notes**
- Antiforgery is enabled (`app.UseAntiforgery()`); API endpoints or forms must include antiforgery tokens when added.
- Static assets and localized resources are exposed via `MapStaticAssets()` and `wwwroot`.

**How agents should make changes**
- Small, focused PRs: migration + model changes together. If changing a model property that affects the DB, include a `dotnet ef migrations add` step and migration files in `ExpenseTracker/Data/Migrations`.
- When adding pages/components, register routes in `Components/Routes.razor` if needed and update `NavMenu.razor` for navigation.

**Quick references**
- Run app: `dotnet run` (see [ExpenseTracker/Program.cs](ExpenseTracker/Program.cs#L1-L40)).
- DB context: [ExpenseTracker/Data/ApplicationDbContext.cs](ExpenseTracker/Data/ApplicationDbContext.cs#L1-L60).
- Models: `Expense`, `Category`, `ApplicationUser` under [ExpenseTracker/Models](ExpenseTracker/Models).

If anything here is unclear or you want more detail (example component to modify, migration example, or test strategy), tell me which area to expand.
