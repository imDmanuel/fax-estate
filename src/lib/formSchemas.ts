import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required!" })
    .email("Please provide a valid email"),
  password: z
    .string({ required_error: "Password is required!" })
    .min(6, "Please enter at least six (6) characters!"),
});

export type LoginForm = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    fullName: z.string({ required_error: "Full Nname is required!" }),
    email: z
      .string({ required_error: "Email is required!" })
      .email("Please enter a valid email!"),
    password: z
      .string({ required_error: "Password is required!" })
      .min(6, "Please enter at least six (6) characters!"),
    confirm: z.string(),
  })
  .superRefine(({ password, confirm }, ctx) => {
    if (confirm !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirm"],
      });
    }
  });

export type RegisterForm = z.infer<typeof registerFormSchema>;
