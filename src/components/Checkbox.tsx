import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export const Checkbox = () => {
  return (
    <View className="flex-row items-center gap-4">
      <TouchableOpacity className="flex items-center justify-center bg-indigo-800 w-6 h-6 rounded-md border border-slate-600">
        <FontAwesome name="check" size={12} color="white" />
      </TouchableOpacity>
      <Text className="text-white font-notosansbold">Remember me</Text>
    </View>
  );
};
