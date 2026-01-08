import { useEffect, type PropsWithChildren } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import * as AppleAuthentication from "expo-apple-authentication";

export type SocialAuthData = {
  provider: "google" | "apple";
  token: string;
  email?: string | null;
  name?: string | null;
  id?: string;
};
type Props = PropsWithChildren<{
  socialMedia?: "facebook" | "google" | "apple";
  width: number;
  height: number;
  onAuthenticated?: (data: SocialAuthData) => void;
}>;

import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export const ButtonSocial = ({
  socialMedia,
  children,
  width,
  height,
  onAuthenticated,
}: Props) => {
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log({ userInfo: response.data });
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      console.log(error, "deu erro!");
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  async function signInApple() {
    try {
      console.log("1. Chamando AppleAuthentication...");

      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      // LOG IMPORTANTE: Coloque aqui para ver se a Apple devolveu algo,
      // independente do seu 'if' abaixo.
      console.log(
        "2. Resposta da Apple Recebida:",
        JSON.stringify(credential, null, 2)
      );

      // Verificação separada para entender o erro
      if (!credential.identityToken) {
        console.error("ERRO: O identityToken veio vazio.");
        return;
      }

      if (!onAuthenticated) {
        console.warn(
          "ALERTA: A prop 'onAuthenticated' não foi passada para o componente ButtonSocial!"
        );
        // Mesmo sem a prop, vamos logar para você ver que o login funcionou
      }

      if (onAuthenticated && credential.identityToken) {
        let fullName = null;
        if (credential.fullName?.givenName) {
          fullName = `${credential.fullName.givenName} ${
            credential.fullName.familyName || ""
          }`.trim();
        }

        console.log("3. Enviando dados para onAuthenticated...");

        onAuthenticated({
          provider: "apple",
          token: credential.identityToken,
          email: credential.email,
          name: fullName,
          id: credential.user,
        });
      }
    } catch (e: any) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        console.log("4. Usuário cancelou o login.");
      } else {
        console.error("5. Erro fatal no Apple Sign In:", e);
        Alert.alert("Erro", "Falha no login com Apple.");
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        if (socialMedia === "google") {
          signInGoogle();
        } else {
          signInApple();
        }
      }}
      className="flex-row gap-2 items-center justify-center bg-zinc-900 w-full h-12 rounded-2xl border border-slate-600"
    >
      {socialMedia === "apple" ? (
        <AppleIcon width={width} height={height} />
      ) : (
        <GoogleIcon width={width} height={height} />
      )}
      <Text className="text-white font-notosans"> {children} </Text>
    </TouchableOpacity>
  );
};
