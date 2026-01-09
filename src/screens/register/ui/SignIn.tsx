import { Checkbox } from "@/components/Checkbox";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ButtonSocial } from "../components/ButtonSocial";
import { StepsLayout } from "./StepsLayout";
import { useNavigation } from "@/hooks/useNavigation";
import { useRouter } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Button } from "@/components/Button";

export const SignIn = () => {
  const router = useRouter();
  const { progressPercent } = useNavigation();
  const { removeItem } = useAsyncStorage("@onboarding_key");

  const handleBackPage = async () => {
    await removeItem();
    router.replace("/onboarding");
  };

  return (
    <StepsLayout
      handleBack={handleBackPage}
      progress={progressPercent}
      isHiddenProgress
    >
      <ScrollView className="flex-1 gap-[16] px-6">
        <Text className="text-3xl mt-2 text-center mb-2 font-bold text-white font-notosansbold leading-[1.8]">
          SignIn
        </Text>
        <Text className="text-md text-center mb-8 font-bold text-white font-notosans leading-[1.8]">
          Please enter your username or email address and password. If you
          forget it, then you have to do forgot password.
        </Text>
        <View className="flex gap-10 mt-4">
          <Input
            fieldText="Username or e-mail"
            placeholder="insert your username or e-mail"
          />

          <Input placeholder="insert your secret pass" fieldText="Password" />

          <Checkbox />
        </View>
        <View className="flex-row items-center justify-center mt-8 gap-4">
          <Divider />
          <Text className="text-white font-notosansbold">or</Text>
          <Divider />
        </View>

        <View className="flex gap-6 mt-4">
          <ButtonSocial
            onAuthenticated={(data) => {
              console.log("RECEBI NO PAI:", data);
            }}
            width={16}
            height={16}
            socialMedia="google"
          >
            Continue with Google
          </ButtonSocial>

          <ButtonSocial width={18} height={18} socialMedia="apple">
            Continue with Apple
          </ButtonSocial>

          <Button
            className="mt-6"
            onPress={() => router.push("/register")}
            label="GET STARTED"
          />
        </View>

        <View className="flex justify-center items-center mt-6 mb-6">
          <Text
            onPress={() => {
              removeItem();
            }}
            className="text-white underline"
          >
            Forgot password?
          </Text>
        </View>
      </ScrollView>
    </StepsLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
