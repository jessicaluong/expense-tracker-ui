import type { EXPENSE_CATEGORIES } from "./constants";

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export type Expense = {
  id: string;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
};
