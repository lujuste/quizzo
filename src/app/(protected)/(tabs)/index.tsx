import { AuthCache } from "@/services/authCache.services";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ThirdScreen() {
  const router = useRouter();

  return (
    <View className="justify-center p-4 flex-1  bg-zinc-950">
      <Text>
        OioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiiiOioiiiiiiiiiiiiiiii
        Oioiiiiiiiiiiiiiiii2
      </Text>

      <Button
        title="Go to author2"
        onPress={() => {
          AuthCache.removeToken();
          router.navigate("/login");
        }}
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
