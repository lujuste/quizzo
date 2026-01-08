import {
  buttonStep,
  INITIALSTATE_STEPS,
  navigationHistoryAtom,
  stepsHistoryAtom,
  type NavigationState,
  type PagesEnum,
} from "@/screens/register/atoms/StepNavigation/stepsNavigationAtom.atoms";
import { useAtom } from "jotai";

export const useNavigation = () => {
  const [navigationHistory, setNavigationHistory] = useAtom<NavigationState[]>(
    navigationHistoryAtom
  );

  const [steps, setSteps] = useAtom(stepsHistoryAtom);

  const [disabledButton, setDisabledButton] = useAtom(buttonStep);

  const setBlockButton = ({ option = false }: { option?: boolean }) => {
    setDisabledButton(option);
  };

  let progressPercent = Math.round((navigationHistory.length / steps) * 100);
  const current = navigationHistory[navigationHistory.length - 1];
  const currentPage = current?.page;
  const currenNumberPage = navigationHistory.length;

  function handleChangeSteps(steps: number | undefined = INITIALSTATE_STEPS) {
    setSteps(steps);
  }

  const go = (page: PagesEnum) => {
    if (current.page === page) return;
    setDisabledButton(true);
    setNavigationHistory((prev) => [...prev, { page }]);
  };

  const back = () => {
    setNavigationHistory((prev) => {
      if (prev.length > 1) return prev.slice(0, -1);
      return prev;
    });
  };

  console.log(navigationHistory.length, progressPercent);

  return {
    navigationHistory,
    currentPage,
    currenNumberPage,
    navigate: { go, back },
    progressPercent,
    steps,
    handleChangeSteps,
    actions: {
      disabledButton,
      setBlockButton,
    },
  };
};
