import { useFilterContext } from "@/lib/hooks";
import ExpenseCard from "./ExpenseCard";
import { EXPENSE_CATEGORIES } from "@/lib/constants";
import type { ExpenseCategory } from "@/lib/types";

export default function Expenses() {
  const { filteredExpenses } = useFilterContext();

  // for consistency with summary, ignore expenses with incorrect categories
  const validExpenses = filteredExpenses.filter((expense) =>
    EXPENSE_CATEGORIES.includes(expense.category as ExpenseCategory)
  );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Expenses</h1>
      {validExpenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
