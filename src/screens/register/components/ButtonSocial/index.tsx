import { useEffect, type PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";

type Props = PropsWithChildren<{
  socialMedia?: "facebook" | "google" | "apple";
  width: number;
  height: number;
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
}: Props) => {
  const signIn = async () => {
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

  return (
    <TouchableOpacity
      onPress={() => {
        if (socialMedia === "google") {
          signIn();
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
