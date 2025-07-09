import { useRouter } from "expo-router";
import { StepsLayout } from "@/screens/register/ui/StepsLayout";
import { Ocupation } from "@/screens/register/ui/Ocupation";
import { useNavigation } from "@/screens/hooks/useNavigation";
import { PagesEnum } from "@/screens/register/atoms/StepNavigation/stepsNavigationAtom.atoms";
import { Workspace } from "@/screens/register/ui/Workspace";
import { Credentials } from "@/screens/register/ui/Credentials";
import { FinishRegister } from "@/screens/register/ui/FinishRegister";

export default function RegisterScreen() {
  const router = useRouter();
  const { currentPage, navigate, progressPercent } = useNavigation();

  const handleBackPage = () => {
    if (currentPage === PagesEnum.OCUPATION) return router.back();
    navigate.back();
  };

  const pages = {
    ocupation: Ocupation,
    workspace: Workspace,
    credentials: Credentials,
    finishRegister: FinishRegister,
  };

  const handleNextPage = () => {
    if (currentPage === PagesEnum.OCUPATION)
      return navigate.go(PagesEnum.WORKSPACE);

    if (currentPage === PagesEnum.WORKSPACE)
      return navigate.go(PagesEnum.CREDENTIALS);

    if (currentPage === PagesEnum.CREDENTIALS)
      return navigate.go(PagesEnum.FINISH_CREDENTIALS);
  };

  const Component = pages[currentPage] || pages.ocupation;

  return (
    <StepsLayout
      handleBack={handleBackPage}
      handleGo={handleNextPage}
      progress={progressPercent}
    >
      <Component />
    </StepsLayout>
  );
}
