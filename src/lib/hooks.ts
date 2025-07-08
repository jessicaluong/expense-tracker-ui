import { useContext } from "react";
import { ExpensesContext } from "@/contexts/ExpensesProvider";

export function useExpensesContext() {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error("Must add provider");
  }
  return context;
}
