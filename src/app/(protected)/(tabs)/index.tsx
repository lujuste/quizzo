import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ThirdScreen() {
  const router = useRouter();

  return (
    <View className="justify-center flex-1 p-4">
      <Text>
        OioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiii
        Oioiiiiiiiiiiiiiiii2
      </Text>

      <Button
        title="Go to author"
        onPress={() => router.navigate("/(authors)/author")}
      />
      <Button
        title="Go to author"
        onPress={() => router.navigate("/(authors)/author")}
      />
      <Button
        title="Go to author"
        onPress={() => router.navigate("/(authors)/author")}
      />
      <Button
        title="Go to author"
        onPress={() => router.navigate("/(authors)/author")}
      />
    </View>
  );
}
