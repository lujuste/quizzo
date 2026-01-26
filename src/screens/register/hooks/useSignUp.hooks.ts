import { SignUpServices } from "@/services/register-user.services";
import { useMutation } from "@tanstack/react-query";
import type { IRegisterZod } from "../form/registerSchema.form";

export function useSignUp() {
  const signUpMutations = {
    default: useMutation({
      mutationKey: ["register"],
      mutationFn: (register: IRegisterZod) => {
        return SignUpServices.default(register);
      },
    }),
  };

  return {
    signUpMutations,
  };
}
