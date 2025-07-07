import ExpenseCard from "./ExpenseCard";

export default function Expenses() {
  return (
    <div className="flex-1 min-w-0 p-[10px]">
      Expenses
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </div>
  );
}
