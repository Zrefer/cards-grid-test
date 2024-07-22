import { z } from "zod";

export const validationSchema = z.object({
  title: z.string().min(1, "Необходимо название"),
  description: z.string().min(1, "Необходимо описание"),
  size: z.coerce
    .number()
    .int("Только целочисленные значения")
    .min(3, "Число должно быть >= 3")
    .max(12, "Число должно быть <= 12"),
});
export type ValidationType = z.infer<typeof validationSchema>;
