import "@/global.css";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createStore, Provider } from "jotai";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { LogBox } from "react-native";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useOnboarding } from "@/hooks/useOnboarding.hooks";

// Ignora todos os warnings visuais
LogBox.ignoreAllLogs(true);

// Override global do console.warn
const originalWarn = console.warn;
console.warn = (...args: any[]) => {
  const message = args[0] + "";
  if (
    message.includes("Tried to modify key `current` of an object") ||
    message.includes("Require cycle:")
  ) {
    return; // ignora
  }
  originalWarn(...args); // mantém outros warnings
};
const customStore = createStore();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NotoSans: require("../assets/fonts/Noto_Sans/static/NotoSans-Regular.ttf"),
    NotoSansBold: require("../assets/fonts/Noto_Sans/static/NotoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1  bg-zinc-950">
        <ActivityIndicator size="large" color="#fff" className="flex-1" />
      </View>
    );
  }

  return (
    <View className="flex-1  bg-zinc-950">
      <Provider store={customStore}>
        <GestureHandlerRootView>
          <StatusBar style="light" />
          <Stack>
            <Stack.Screen
              name="(protected)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="login"
            />

            <Stack.Screen
              name="onboarding"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="register"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </Provider>
    </View>
  );
}
