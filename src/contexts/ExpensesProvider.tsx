import type { Expense } from "@/lib/types";
import { useState, createContext, useEffect } from "react";

type ExpensesContextType = {
  expenses: Expense[];
  removeExpense: (id: string) => void;
  addExpense: (expenseData: Omit<Expense, "id">) => void;
};

type ExpensesContextProviderProps = {
  children: React.ReactNode;
};

export const ExpensesContext = createContext<ExpensesContextType | null>(null);

export function ExpensesProvider({ children }: ExpensesContextProviderProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/685aecb28960c979a5b0b51b")
      .then((res) => res.json())
      .then((data) => setExpenses(data.record))
      .catch((err) => console.error("Error loading expenses:", err));
  }, []);

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const addExpense = (expenseData: Omit<Expense, "id">) => {
    // follow existing pattern for id from mock data and increment starting from max id
    const maxId =
      expenses.length > 0
        ? Math.max(...expenses.map((e) => parseInt(e.id)))
        : 0;

    const newExpense: Expense = {
      ...expenseData,
      id: (maxId + 1).toString(),
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, removeExpense, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
}
