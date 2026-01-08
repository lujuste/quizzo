import { Checkbox } from "@/components/Checkbox";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ButtonSocial } from "../components/ButtonSocial";

export const FinishRegister = () => {
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
        <Input fieldText="Username" placeholder="insert your username" />

        <Input placeholder="insert your email" fieldText="Email" />

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
      </View>
    </ScrollView>
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
