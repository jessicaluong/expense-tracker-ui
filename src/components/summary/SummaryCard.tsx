import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currencyFormat } from "@/lib/utils";

type SummaryCardProps = {
  category: string;
  total: number;
};

export default function SummaryCard({ category, total }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{currencyFormat(total)}</p>
      </CardContent>
    </Card>
  );
}
