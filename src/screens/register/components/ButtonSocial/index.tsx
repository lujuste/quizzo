import type { PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";

type Props = PropsWithChildren<{
  socialMedia?: "facebook" | "google" | "apple";
  width: number;
  height: number;
}>;

export const ButtonSocial = ({
  socialMedia,
  children,
  width,
  height,
}: Props) => {
  return (
    <TouchableOpacity className="flex-row gap-2 items-center justify-center bg-zinc-900 w-full h-12 rounded-2xl border border-slate-600">
      {socialMedia === "apple" ? (
        <AppleIcon width={width} height={height} />
      ) : (
        <GoogleIcon width={width} height={height} />
      )}
      <Text className="text-white font-notosans"> {children} </Text>
    </TouchableOpacity>
  );
};
