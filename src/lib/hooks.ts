import { useContext } from "react";
import { ExpensesContext } from "@/contexts/ExpensesProvider";
import { FilterContext } from "@/contexts/FilterProvider";

export function useExpensesContext() {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error("Must add provider");
  }
  return context;
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("Must add provider");
  }
  return context;
}
