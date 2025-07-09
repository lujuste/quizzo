import { ProgressBar } from "@/components/ProgressBar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorsScheme } from "@/constants/colors";
import { Back } from "@/components/Back";
import { Footer } from "@/screens/onboarding/components/Footer";
import { Button } from "@/components/Button";
import type { PropsWithChildren } from "react";
import { currentOption } from "@/atoms/Cards/currentOptionAtom.atoms";
import { useAtom } from "jotai";
import { useNavigation } from "@/screens/hooks/useNavigation";

type Props = {
  handleBack: VoidFunction;
  handleGo: VoidFunction;
  progress: number;
} & PropsWithChildren;

export const StepsLayout = ({
  handleBack,
  handleGo,
  progress,
  children,
}: Props) => {
  const [, setCurrentOption] = useAtom(currentOption);
  const { actions, currenNumberPage } = useNavigation();

  return (
    <SafeAreaView className={`flex-1 ${colorsScheme.bg}`}>
      <View className="flex-row py-4 px-6 items-center justify-center">
        <Back
          onPress={() => {
            setCurrentOption(null);
            handleBack();
          }}
        />
        <View className="flex-1 items-center justify-center mt-5">
          <ProgressBar
            steps={5}
            step={currenNumberPage}
            porcentage={progress}
          />
        </View>
      </View>

      {children}

      <Footer maxHeight={100}>
        <Button
          disabled={actions.disabledButton}
          onPress={handleGo}
          label="GET STARTED"
        />
      </Footer>
    </SafeAreaView>
  );
};
