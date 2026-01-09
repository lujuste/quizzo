import { useOnboarding } from "@/hooks/useOnboarding.hooks";
import { SignIn } from "@/screens/register/ui/SignIn";
import { Redirect, useRouter } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function LoginScreen() {
  const { isVisible, handleVisibilityOnboarding } = useOnboarding();
  const { getItem } = useAsyncStorage("@onboarding_key");

  async function readItemFromStorage() {
    const isOnboardingView = await getItem();
    if (isOnboardingView) handleVisibilityOnboarding(false);
  }

  useEffect(() => {
    readItemFromStorage();
  }, []);

  if (isVisible) {
    return <Redirect href={"/onboarding"} />;
  }

  return <SignIn />;
}
