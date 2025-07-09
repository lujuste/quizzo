import { ScrollView, Text, View } from "react-native";
import { prospectUser } from "../constants/onBoardingRegister.constants";
import { Card } from "@/components/Card";
import { useForm } from "@/screens/hooks/useForm";
import { useNavigation } from "@/screens/hooks/useNavigation";

export const Workspace = () => {
  const { form, events } = useForm();
  const { actions } = useNavigation();

  return (
    <View className="flex-1 gap-[16] px-6">
      <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
        Describe a workspace that suits you
      </Text>

      <Text className="text-md text-center font-bold text-white font-notosans leading-[1.8]">
        You can skip it if you're not sure.
      </Text>

      <ScrollView className="mt-6 h-full">
        <View className="flex gap-[22]">
          {prospectUser.workspace.map((user, index) => (
            <Card
              key={user}
              label={user}
              index={index}
              isActive={user === form.workspace}
              onSelect={(select) => {
                actions.setBlockButton({ option: false });
                events.set("workspace", select);
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
