import { useAuth } from "@/hooks/useAuth.hooks";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedLayout() {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1  bg-zinc-950">
        <ActivityIndicator size="large" color="#fff" className="flex-1" />
      </View>
    );
  }

  if (!isLogged) return <Redirect href="/login" />;

  return (
    <View className="flex-1  bg-zinc-950">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(authors)"
          options={{
            title: "test",
          }}
        />
      </Stack>
    </View>
  );
}
