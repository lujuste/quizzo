import { useNavigation } from "@/hooks/useNavigation";
import { Text } from "react-native";
import { PagesEnum } from "../atoms/StepNavigation/stepsNavigationAtom.atoms";

type Props = {
  to?: "finish";
  text: string;
};

export function SkippedRegister({ text, to = "finish" }: Props) {
  const { navigate, handleChangeSteps, navigationHistory } = useNavigation();

  const paths = {
    finish: PagesEnum.FINISH_CREDENTIALS,
  };

  return (
    <Text
      onPress={() => {
        let steps = navigationHistory.length + 1;
        navigate.go(paths[to]);
        handleChangeSteps(steps);
      }}
      className="text-md text-center font-bold text-white font-notosans leading-[1.8]"
    >
      {text}
    </Text>
  );
}
