import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useStepForm } from "@/hooks/useForm";
import { useNavigation } from "@/hooks/useNavigation";
import { useRegister } from "@/hooks/useRegister.hooks";
import { Footer } from "@/screens/onboarding/components/Footer";
import { Fragment, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { PagesEnum } from "../atoms/StepNavigation/stepsNavigationAtom.atoms";
import { prospectUser } from "../constants/onBoardingRegister.constants";
import { ocupationStepSchema } from "../form/registerSchema.form";
import { SkippedRegister } from "../components/SkippedRegister";

type ValuesOf<T extends readonly any[]> = T[number];
export type IOptionOcupation = ValuesOf<typeof occupations>;

export const occupations = [
  "Personal",
  "Teacher",
  "Student",
  "Professional",
] as const;

export const Ocupation = () => {
  const { navigate } = useNavigation();
  const { handleUpdateProspect, prospect } = useRegister();

  const {
    value: ocupation,
    handleSelect: handleSelectOcupation,
    formState: { isValid },
    setValue,
  } = useStepForm({
    schema: ocupationStepSchema,
    field: "ocupation",
  });

  useEffect(() => {
    if (!prospect.ocupation) return;
    setValue("ocupation", prospect.ocupation);
  }, [prospect.ocupation]);

  return (
    <Fragment>
      <View className="flex-1 gap-[16] px-6">
        <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
          What type of account do you like to create?
        </Text>

        <SkippedRegister
          to="finish"
          text={"You can skip it if you're not sure, tap here."}
        />

        <ScrollView className="mt-6 h-full">
          <View className="flex gap-[22]">
            {prospectUser.occupation.map((user, index) => (
              <Card
                key={user}
                label={user}
                index={index}
                isActive={ocupation === user}
                onSelect={handleSelectOcupation}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Footer maxHeight={100}>
        <Button
          disabled={!isValid && !prospect.ocupation}
          onPress={() => {
            if (!ocupation) return;
            handleUpdateProspect({
              ocupation,
            });
            navigate.go(PagesEnum.WORKSPACE);
          }}
          label="GET STARTED"
        />
      </Footer>
    </Fragment>
  );
};
