import { useExpensesContext } from "@/lib/hooks";
import ExpenseCard from "./ExpenseCard";

export default function Expenses() {
  const { expenses } = useExpensesContext();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Expenses</h1>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
