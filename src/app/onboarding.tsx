import { Button } from "@/components/Button";
import { Carousel } from "@/screens/onboarding/components/Carousel";
import { Footer } from "@/screens/onboarding/components/Footer";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      <Carousel />
      <Footer maxHeight={180}>
        <Button onPress={() => router.push("/register")} label="GET STARTED" />

        <Button
          onPress={() => console.log("oiii")}
          label="I ALREADY HAVE ACCOUNT"
          variant="secondary"
        />
      </Footer>
    </SafeAreaView>
  );
}
