import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { currencyFormat } from "@/lib/utils";
import type { Expense } from "@/lib/types";
import { useExpensesContext } from "@/lib/hooks";
import EditDialog from "./EditDialog";

type ExpenseCardProps = {
  expense: Expense;
};

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  const { removeExpense } = useExpensesContext();

  const handleDelete = () => {
    removeExpense(expense.id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{expense.description}</CardTitle>
        <CardDescription>{expense.category}</CardDescription>
        <CardAction className="flex gap-1">
          <EditDialog expense={expense} />
          <Button variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{currencyFormat(expense.amount)}</p>
        <p>{new Date(expense.date).toLocaleDateString()}</p>
      </CardContent>
    </Card>
  );
}
