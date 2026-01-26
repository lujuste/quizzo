import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function Loading() {
  return (
    <ScrollView className="flex-1">
      <View className="flex gap-8 px-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <View
            key={index}
            className={`w-full ${index % 2 === 0 ? "h-40" : "h-16"} bg-gray-800 animate-pulse border rounded-[16px]`}
          ></View>
        ))}
      </View>
    </ScrollView>
  );
}
