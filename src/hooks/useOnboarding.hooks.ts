import { onboardingVisibleAtom } from "@/atoms/onboardingAtom.atoms";
import { useAtom } from "jotai";

export function useOnboarding() {
  const [isVisible, setIsVisible] = useAtom(onboardingVisibleAtom);

  function handleVisibilityOnboarding(visibility: boolean) {
    setIsVisible(visibility);
  }

  return {
    isVisible,
    handleVisibilityOnboarding,
  };
}
