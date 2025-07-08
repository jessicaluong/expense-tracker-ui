import { useExpensesContext } from "@/lib/hooks";
import SummaryCard from "./SummaryCard";
import { currencyFormat } from "@/lib/utils";

export default function Summary() {
  const { expenses } = useExpensesContext();

  const categoryTotals: Record<string, number> = {};
  let grandTotal: number = 0;

  for (const expense of expenses) {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) + expense.amount;
    grandTotal += expense.amount;
  }

  return (
    <div className="flex flex-col gap-4">
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
