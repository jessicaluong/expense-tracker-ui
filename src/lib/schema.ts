import { z } from "zod";
import { EXPENSE_CATEGORIES } from "./constants";

export const createFormSchema = () => {
  return z.object({
    description: z.string().min(1, "Description is required").trim(),
    amount: z.coerce.number().positive("Amount must be at least 1"),
    category: z.enum(EXPENSE_CATEGORIES, {
      errorMap: () => ({ message: "Invalid category" }),
    }),
    date: z.coerce.date(),
  });
};
