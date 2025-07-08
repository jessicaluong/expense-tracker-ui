import type { Expense } from "@/lib/types";
import { useState, createContext, useEffect } from "react";

type ExpensesContextType = {
  expenses: Expense[];
  removeExpense: (id: string) => void;
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

  return (
    <ExpensesContext.Provider value={{ expenses, removeExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
}
