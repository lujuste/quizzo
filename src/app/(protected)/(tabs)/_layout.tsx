import { Tabs } from "expo-router";
import { View } from "react-native";

export default function BottomTabsLayout() {
  return (
    <View className="flex-1  bg-zinc-950">
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
    </View>
  );
}
