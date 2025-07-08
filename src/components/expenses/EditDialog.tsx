import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { EditForm } from "./EditForm";
import type { Expense } from "@/lib/types";

type EditDialogProps = {
  expense: Expense;
};

export default function EditDialog({ expense }: EditDialogProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Expense</DialogTitle>
          <DialogDescription>Edit an existing expense.</DialogDescription>
        </DialogHeader>
        <EditForm onSuccess={handleClose} expense={expense} />
      </DialogContent>
    </Dialog>
  );
}
