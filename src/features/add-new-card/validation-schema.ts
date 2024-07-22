import { z } from "zod";

export const validationSchema = z.object({
  title: z.string({ required_error: "Необходимо название" }),
  description: z.string({ required_error: "Необходимо описание" }),
  size: z.coerce
    .number()
    .int("Только целочисленные значения")
    .min(3, "Число должно быть >= 3")
    .max(12, "Число должно быть <= 12"),
});
export type ValidationType = z.infer<typeof validationSchema>;
