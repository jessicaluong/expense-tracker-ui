import { useExpensesContext } from "@/lib/hooks";
import type { Expense } from "@/lib/types";
import { createContext, useState } from "react";

type FilterContextType = {
  filteredExpenses: Expense[];
  searchQuery: string;
  handleSetSearchQuery: (query: string) => void;
};

type FilterContextProviderProps = {
  children: React.ReactNode;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: FilterContextProviderProps) {
  const { expenses } = useExpensesContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  return (
    <FilterContext.Provider
      value={{ filteredExpenses, searchQuery, handleSetSearchQuery }}
    >
      {children}
    </FilterContext.Provider>
  );
}
