import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import type { PropsWithChildren } from "react";

import { View } from "react-native";

type Props = {
  maxHeight?: number;
} & PropsWithChildren;

export const Footer = ({ maxHeight = 180, children }: Props) => {
  return (
    <View
      className="flex-1 bg-zinc-950 border-t border-gray-800 gap-[20] px-6 justify-center"
      style={{ maxHeight }}
    >
      {children}
    </View>
  );
};
