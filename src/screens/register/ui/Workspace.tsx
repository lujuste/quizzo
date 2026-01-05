import { Card } from "@/components/Card";

import { Button } from "@/components/Button";
import { useStepForm } from "@/hooks/useForm";
import { useNavigation } from "@/hooks/useNavigation";
import { useRegister } from "@/hooks/useRegister.hooks";
import { Footer } from "@/screens/onboarding/components/Footer";
import { Fragment, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { PagesEnum } from "../atoms/StepNavigation/stepsNavigationAtom.atoms";
import { prospectUser } from "../constants/onBoardingRegister.constants";
import { workspaceStepSchema } from "../form/registerSchema.form";
import { SkippedRegister } from "../components/SkippedRegister";

export const Workspace = () => {
  const { navigate } = useNavigation();
  const { handleUpdateProspect, prospect } = useRegister();

  const {
    value: workspace,
    handleSelect: handleSelectWorkspace,
    formState: { isValid },
    setValue,
  } = useStepForm({
    schema: workspaceStepSchema,
    field: "workspace",
  });

  useEffect(() => {
    if (!prospect.workspace) return;
    setValue("workspace", prospect.workspace);
  }, [prospect.workspace]);

  return (
    <Fragment>
      <View className="flex-1 gap-[16] px-6">
        <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
          Describe a workspace that suits you
        </Text>

        <SkippedRegister text="You can skip it if youre not sure, tap here." />

        <ScrollView className="mt-6 h-full">
          <View className="flex gap-[22]">
            {prospectUser.workspace.map((user, index) => (
              <Card
                key={user}
                label={user}
                index={index}
                isActive={workspace === user}
                onSelect={handleSelectWorkspace}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Footer maxHeight={100}>
        <Button
          disabled={!isValid && !prospect.workspace}
          onPress={() => {
            if (!workspace) return;
            handleUpdateProspect({
              workspace,
            });
            navigate.go(PagesEnum.CREDENTIALS);
          }}
          label="GET STARTED"
        />
      </Footer>
    </Fragment>
  );
};
