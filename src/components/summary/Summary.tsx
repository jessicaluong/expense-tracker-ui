import { useExpensesContext } from "@/lib/hooks";
import SummaryCard from "./SummaryCard";
import { currencyFormat } from "@/lib/utils";
import type { ExpenseCategory } from "@/lib/types";
import { EXPENSE_CATEGORIES } from "@/lib/constants";

export default function Summary() {
  const { expenses } = useExpensesContext();

  // type assertion because am certain EXPENSE_CATEGORIES is correct
  const categoryTotals: Record<ExpenseCategory, number> = Object.fromEntries(
    EXPENSE_CATEGORIES.map((category) => [category, 0])
  ) as Record<ExpenseCategory, number>;

  let grandTotal: number = 0;

  for (const expense of expenses) {
    // ignore data with incorrect categories in summary
    if (EXPENSE_CATEGORIES.includes(expense.category as ExpenseCategory)) {
      categoryTotals[expense.category] += expense.amount;
      grandTotal += expense.amount;
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Summary</h1>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <SummaryCard key={category} category={category} total={total} />
      ))}
      <p className="text-xl font-semibold">
        Total: {currencyFormat(grandTotal)}
      </p>
    </div>
  );
}
