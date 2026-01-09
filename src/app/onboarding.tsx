import { Button } from "@/components/Button";
import { useOnboarding } from "@/hooks/useOnboarding.hooks";
import { Carousel } from "@/screens/onboarding/components/Carousel";
import { Footer } from "@/screens/onboarding/components/Footer";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { setItem, getItem } = useAsyncStorage("@onboarding_key");

  const { handleVisibilityOnboarding } = useOnboarding();

  async function handleNavigateLogin() {
    try {
      await setItem("true");
      console.log("Salvo com sucesso no Storage");

      handleVisibilityOnboarding(false);

      router.push("/login");
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  }

  async function redirectLogin() {
    const isOnboarding = await getItem();

    setIsLoading(false);

    if (isOnboarding) {
      handleVisibilityOnboarding(false);
      router.push("/login");
    }
  }

  useEffect(() => {
    redirectLogin();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1  bg-zinc-950">
        <ActivityIndicator size="large" color="#fff" className="flex-1" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      <Carousel />
      <Footer maxHeight={180}>
        <Button onPress={() => router.push("/register")} label="GET STARTED" />

        <Button
          onPress={handleNavigateLogin}
          label="I ALREADY HAVE ACCOUNT"
          variant="secondary"
        />
      </Footer>
    </SafeAreaView>
  );
}
