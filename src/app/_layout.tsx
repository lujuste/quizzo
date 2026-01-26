import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createStore, Provider } from "jotai";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/clients/tanstack-query.client";
import { useAuth } from "@/hooks/useAuth.hooks";
import { useEffect } from "react";

// Ignora todos os warnings visuais
LogBox.ignoreAllLogs(true);

SplashScreen.preventAutoHideAsync();

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

  const { isLoading } = useAuth();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || isLoading) {
    return (
      <View className="flex-1  bg-zinc-950">
        <ActivityIndicator size="large" color="#fff" className="flex-1" />
      </View>
    );
  }

  return (
    <View className="flex-1  bg-zinc-950">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </View>
  );
}
