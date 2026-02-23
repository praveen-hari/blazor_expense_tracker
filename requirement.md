---

# 📘 Expense Tracker Web Application

*(With User Authentication – Blazor Server / ASP.NET Core)*

---

# 1. Introduction

## 1.1 Purpose

This document defines the functional and non-functional requirements for the Expense Tracker Web Application with user authentication.

## 1.2 Objective

To build a secure web application that allows registered users to:

* Create an account
* Login securely
* Manage personal expenses
* View reports and summaries

---

# 2. Scope

The system will:

* Support multi-user accounts
* Store expenses per user
* Provide authentication and authorization
* Maintain data privacy between users

---

# 3. User Roles

| Role                    | Description             |
| ----------------------- | ----------------------- |
| User                    | Can manage own expenses |
| Admin (Optional Future) | Manage users & system   |

---

# 4. Functional Requirements

---

# 4.1 Authentication Module

## FR-1: User Registration (Sign-Up)

User shall be able to create a new account by entering:

* Full Name (Required)
* Email Address (Required, unique)
* Password (Required)
* Confirm Password (Required)

System shall:

* Validate email format
* Ensure email uniqueness
* Enforce password rules:

  * Minimum 8 characters
  * At least 1 uppercase letter
  * At least 1 number
* Encrypt password (hashing)
* Store user in database
* Redirect to login page after successful registration

---

## FR-2: User Login (Sign-In)

User shall be able to login using:

* Email
* Password

System shall:

* Validate credentials
* Create authenticated session
* Redirect to Dashboard
* Show error for invalid login

---

## FR-3: Logout

User shall:

* Click Logout button

System shall:

* End session
* Redirect to Login page

---

## FR-4: Access Control

System shall:

* Restrict dashboard and expense pages to authenticated users only
* Redirect unauthenticated users to Login page
* Ensure users can only access their own data

---

# 5. Expense Management (Per User)

All expense records must be linked to the logged-in user.

---

## FR-5: Add Expense

User can:

* Add expense with:

  * Title
  * Amount
  * Category
  * Date
  * Notes

System shall:

* Associate expense with logged-in UserId
* Validate fields
* Save to database

---

## FR-6: View Expenses

User can:

* View only their own expenses
* Sort by date or amount
* Filter by category/date
* Search by title

---

## FR-7: Edit Expense

User can:

* Edit only their own expense records

System shall:

* Prevent editing other users’ records

---

## FR-8: Delete Expense

User can:

* Delete only their own records
* Confirm before deletion

---

## FR-9: Dashboard

Dashboard shall display (for logged-in user only):

* Total expenses (All time)
* Total expenses (Current month)
* Today’s expenses
* Category-wise summary
* Recent 5 transactions
* Chart visualization

Icons (Google Material Symbols):

* Dashboard → `dashboard`
* Add → `add`
* Expenses → `receipt_long`
* Reports → `bar_chart`
* Logout → `logout`

---

## FR-10: Reports

User can:

* View monthly breakdown
* View category-wise spending
* Filter by month/year
* View chart

Optional:

* Export to Excel/PDF

---

# 6. Database Design

---

## 6.1 Users Table

| Field        | Type            | Description           |
| ------------ | --------------- | --------------------- |
| Id           | int (PK)        | User ID               |
| FullName     | string          | User name             |
| Email        | string (Unique) | Login email           |
| PasswordHash | string          | Encrypted password    |
| CreatedAt    | datetime        | Account creation date |

---

## 6.2 Expenses Table

| Field      | Type     | Description        |
| ---------- | -------- | ------------------ |
| Id         | int (PK) | Expense ID         |
| UserId     | int (FK) | Reference to User  |
| Title      | string   | Expense title      |
| Amount     | decimal  | Expense amount     |
| CategoryId | int      | Category reference |
| Date       | datetime | Expense date       |
| Notes      | string   | Optional notes     |
| CreatedAt  | datetime | Record creation    |

---

## 6.3 Categories Table

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| Id    | int (PK) | Category ID        |
| Name  | string   | Category name      |
| Icon  | string   | Material icon name |

---

# 7. Non-Functional Requirements

## 7.1 Security

* Password hashing using ASP.NET Identity
* HTTPS enabled
* Session timeout after inactivity
* Protect against:

  * SQL Injection
  * XSS
  * CSRF

---

## 7.2 Performance

* Page load < 3 seconds
* Support 1,000+ users

---

## 7.3 Usability

* Responsive design
* Simple UI
* Clear validation messages
* Consistent Material Icons usage

---

## 7.4 Reliability

* No data loss
* Data stored securely
* Backup recommended

---

# 8. Technology Stack

* Frontend: Blazor Server
* Backend: ASP.NET Core
* Authentication: ASP.NET Core Identity
* ORM: Entity Framework Core
* Database: SQL Server / SQLite
* UI: Bootstrap 5
* Icons: Google Material Symbols

---

# 9. Pages Structure

Public Pages:

* Login
* Register

Authenticated Pages:

* Dashboard
* Add Expense
* Expense List
* Edit Expense
* Categories
* Reports
* Profile (Optional)

---

# 10. Validation Rules

Registration:

* Email must be valid
* Password must meet security rules
* Confirm password must match

Expense:

* Title required
* Amount > 0
* Category required

---

# 11. Future Enhancements

* Forgot Password
* Email verification
* Two-Factor Authentication (2FA)
* Role-based admin panel
* Budget alerts
* Recurring expenses
* Dark mode
* Cloud deployment

---

# 12. Acceptance Criteria

Project is complete when:

* User can register and login
* Authentication restricts access properly
* Expenses are stored per user
* Users cannot see other users’ data
* Dashboard shows accurate calculations
* All CRUD operations function correctly
* Application is responsive and secure

---
