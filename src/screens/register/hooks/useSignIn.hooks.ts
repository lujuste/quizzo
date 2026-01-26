import { useMutation } from "@tanstack/react-query";
import { SignInService, type ISignIn } from "@/services/sign-in.services";
import { useRouter } from "expo-router";
import { AuthCache } from "@/services/authCache.services";
import { useAuth } from "@/hooks/useAuth.hooks";

export function useSignIn() {
  const router = useRouter();
  const { updateLogged } = useAuth();

  const signInMutations = {
    default: useMutation({
      mutationKey: ["signIn"],
      mutationFn: (signIn: ISignIn) => {
        return SignInService.default(signIn);
      },
      onSuccess: async (data) => {
        if (data.token) {
          await AuthCache.saveToken(data.token);
          updateLogged(true);
          router.replace("/(protected)");
        }
      },
      onError: (error) => {},
    }),
  };

  return {
    signInMutations,
  };
}
