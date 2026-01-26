import { z } from "zod";

export type IRegister = z.infer<typeof registerSchemaForm>;
export type OcupationStepForm = z.infer<typeof ocupationStepSchema>;
export type WorkspaceStepForm = z.infer<typeof workspaceStepSchema>;
export type IRegisterZod = z.infer<typeof zodRegisterSchema>;
export type ISignInZod = z.infer<typeof zodSignInSchema>;

export const registerSchemaForm = z.object({
  ocupation: z.string().min(1, "Ocupação é obrigatória"),
  workspace: z.string().min(1, "Workspace é obrigatório"),
  fullName: z.string().min(2, "Nome completo deve ter ao menos 2 caracteres"),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),
  country: z.string().min(1, "País é obrigatório"),
  phone: z
    .string()
    .min(8, "Telefone inválido")
    .refine(
      (v) => /^[\d+\-().\s]+$/.test(v),
      "Telefone contém caracteres inválidos",
    ),
  email: z.email("Email inválido"),
  password: z.string().min(8, "Senha deve ter ao menos 8 caracteres"),
});

export const ocupationStepSchema = registerSchemaForm.pick({
  ocupation: true,
});

export const workspaceStepSchema = registerSchemaForm.pick({
  workspace: true,
});

export const zodRegisterSchema = z.object({
  name: z.string().min(6),
  email: z.email(),
  password: z.string().min(8),
});

export const zodSignInSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});
