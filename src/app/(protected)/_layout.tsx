import { Redirect, Stack } from "expo-router";

const isLogin = true;

export default function ProtectedLayout() {
  if (isLogin) {
    return <Redirect href="/login" />;
  }

  return (
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
  );
}
