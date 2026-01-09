import { currentOption } from "@/atoms/currentOptionAtom.atoms";
import { Back } from "@/components/Back";
import { ModalBottomSheet } from "@/components/ModalBottomSheet";
import { ProgressBar } from "@/components/ProgressBar";
import { colorsScheme } from "@/constants/colors";
import { useNavigation } from "@/hooks/useNavigation";
import { useAtom } from "jotai";
import { type PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  handleBack: VoidFunction;
  progress: number;
  isHiddenProgress?: boolean;
} & PropsWithChildren;

export const StepsLayout = ({
  handleBack,
  progress,
  isHiddenProgress = false,
  children,
}: Props) => {
  const [, setCurrentOption] = useAtom(currentOption);
  const { currenNumberPage, steps } = useNavigation();

  return (
    <SafeAreaView className={`flex-1 ${colorsScheme.bg}`}>
      <View className="flex-1 relative">
        <View className="flex-row py-4 px-6 items-center">
          <Back
            onPress={() => {
              setCurrentOption(null);
              handleBack();
            }}
          />
          {!isHiddenProgress && (
            <View className="flex-1 items-center justify-center mt-5">
              <ProgressBar
                steps={steps}
                step={currenNumberPage}
                porcentage={progress}
              />
            </View>
          )}
        </View>

        {children}
      </View>

      <ModalBottomSheet />
    </SafeAreaView>
  );
};
