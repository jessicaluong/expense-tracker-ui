import type { Expense } from "@/lib/types";
import { useState, createContext, useEffect } from "react";

type ExpensesContextType = {
  expenses: Expense[];
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
      .then((data) => setExpenses(data.record)) // or data.record.record if nested
      .catch((err) => console.error("Error loading expenses:", err));
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses }}>
      {children}
    </ExpensesContext.Provider>
  );
}
