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
import { Controller, useForm } from "react-hook-form";
import type { ISignInZod } from "../form/registerSchema.form";
import { useSignIn } from "../hooks/useSignIn.hooks";
import { Loading } from "@/components/Loading";

export const SignIn = () => {
  const router = useRouter();
  const { progressPercent } = useNavigation();
  const { removeItem } = useAsyncStorage("@onboarding_key");

  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<ISignInZod>({});

  const { signInMutations } = useSignIn();

  let { mutate: signInMutation, isPending } = signInMutations.default;

  const handleBackPage = async () => {
    await removeItem();
    router.replace("/onboarding");
  };

  function handleSignIn(data: ISignInZod) {
    signInMutation(data);
  }

  if (isPending) return <Loading />;

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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={(text) => onChange(text.toLowerCase())}
                fieldText="Username"
                placeholder="insert your username"
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={(text) => onChange(text.toLowerCase())}
                secureTextEntry
                placeholder="insert your secret pass"
                fieldText="Password"
              />
            )}
            name="password"
          />

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
            onPress={handleSubmit(handleSignIn)}
            label="SIGN IN"
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
