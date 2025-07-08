import { z } from "zod";
import { EXPENSE_CATEGORIES } from "./constants";

export const createFormSchema = () => {
  return z.object({
    description: z
      .string()
      .min(1, "Description is required")
      .max(200, "Description must be 200 characters or less")
      .trim(),
    amount: z.coerce
      .number()
      .positive("Amount must be greater than 0")
      .max(999999.99, "Amount cannot exceed $999,999.99")
      .multipleOf(0.01, "Amount can only have up to 2 decimal places"),
    category: z.enum(EXPENSE_CATEGORIES, {
      errorMap: () => ({ message: "Invalid category" }),
    }),
    date: z.coerce.date(),
  });
};
