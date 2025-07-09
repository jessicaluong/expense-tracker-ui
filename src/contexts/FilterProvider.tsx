import { useExpensesContext } from "@/lib/hooks";
import type { Expense, ExpenseCategory } from "@/lib/types";
import { createContext, useState } from "react";

type FilterContextType = {
  filteredExpenses: Expense[];
  searchQuery: string;
  handleSetSearchQuery: (query: string) => void;
  selectedCategory: ExpenseCategory | "View all...";
  handleSetSelectedCategory: (
    category: ExpenseCategory | "View all..."
  ) => void;
};

type FilterContextProviderProps = {
  children: React.ReactNode;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: FilterContextProviderProps) {
  const { expenses } = useExpensesContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<
    ExpenseCategory | "View all..."
  >("View all...");

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const handleSetSelectedCategory = (
    category: ExpenseCategory | "View all..."
  ) => {
    setSelectedCategory(category);
  };

  const filteredExpenses = expenses.filter((expense) => {
    // filter by category
    const matchesCategory =
      selectedCategory === "View all..." ||
      selectedCategory === expense.category;

    // search by description
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <FilterContext.Provider
      value={{
        filteredExpenses,
        searchQuery,
        handleSetSearchQuery,
        selectedCategory,
        handleSetSelectedCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
