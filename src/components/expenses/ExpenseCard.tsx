import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExpenseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense description</CardTitle>
        <CardDescription>Category</CardDescription>
        <CardAction>Edit Delete</CardAction>
      </CardHeader>
      <CardContent>
        <p>Price</p>
        <p>Date</p>
      </CardContent>
    </Card>
  );
}
