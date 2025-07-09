import { Stack } from "expo-router";

export default function AuthorsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="author"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
