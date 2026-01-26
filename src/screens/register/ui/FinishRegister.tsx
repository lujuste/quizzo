import { Checkbox } from "@/components/Checkbox";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ButtonSocial } from "../components/ButtonSocial";
import { Button } from "@/components/Button";
import { Controller, useForm } from "react-hook-form";
import type { IRegisterZod } from "../form/registerSchema.form";
import { useSignUp } from "../hooks/useSignUp.hooks";
import { Loading } from "@/components/Loading";

export const FinishRegister = () => {
  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<IRegisterZod>({});

  const { signUpMutations } = useSignUp();

  let { mutate: signUpMutation, isPending } = signUpMutations.default;

  function handleSignUp(data: IRegisterZod) {
    signUpMutation(data);
  }

  if (isPending) return <Loading />;

  return (
    <ScrollView className="flex-1 gap-[16] px-6">
      <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
        Create an account
      </Text>
      <Text className="text-md text-center font-bold text-white font-notosans leading-[1.8]">
        Please enter your username, email address and password. If you forget
        it, then you have to do forgot password.
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
          name="name"
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
              placeholder="insert your email"
              fieldText="Email"
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

        <View>
          <Button onPress={handleSubmit(handleSignUp)} label="SIGN UP" />
        </View>
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
      </View>
    </ScrollView>
  );
};
