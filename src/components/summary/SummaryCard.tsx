import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>Spending / Budget</p>
      </CardContent>
    </Card>
  );
}
