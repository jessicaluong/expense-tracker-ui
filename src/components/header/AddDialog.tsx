import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { AddForm } from "./AddForm";
import { useState } from "react";

export default function AddDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Expense</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Add a new expense to your expense tracker.
          </DialogDescription>
        </DialogHeader>
        <AddForm onSuccess={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
