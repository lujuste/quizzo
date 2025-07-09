import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider } from "jotai";
import { createStore } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

const customStore = createStore();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NotoSans: require("../assets/fonts/Noto_Sans/static/NotoSans-Regular.ttf"),
    NotoSansBold: require("../assets/fonts/Noto_Sans/static/NotoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Ou um loading
  }

  return (
    <Provider store={customStore}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="login" />

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
    </Provider>
  );
}
