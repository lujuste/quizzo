import { Tabs } from "expo-router";

export default function BottomTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "teal" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
