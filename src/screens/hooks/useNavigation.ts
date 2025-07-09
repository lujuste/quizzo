import { useAtom } from "jotai";
import {
  buttonStep,
  navigationHistoryAtom,
  type NavigationState,
  type PagesEnum,
} from "../register/atoms/StepNavigation/stepsNavigationAtom.atoms";

const totalPages = 4;

export const useNavigation = () => {
  const [navigationHistory, setNavigationHistory] = useAtom<NavigationState[]>(
    navigationHistoryAtom
  );

  const [disabledButton, setDisabledButton] = useAtom(buttonStep);

  const setBlockButton = ({ option = false }: { option?: boolean }) => {
    setDisabledButton(option);
  };

  const progressPercent = Math.round(
    (navigationHistory.length / totalPages) * 100
  );

  const current = navigationHistory[navigationHistory.length - 1];
  const currentPage = current?.page;
  const currenNumberPage = navigationHistory.length;

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

  return {
    currentPage,
    currenNumberPage,
    navigate: { go, back },
    progressPercent,
    actions: {
      disabledButton,
      setBlockButton,
    },
  };
};
