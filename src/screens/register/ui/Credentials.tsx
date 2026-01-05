import { Input } from "@/components/Input";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  type TextInput,
} from "react-native";

import { useBottomSheetNavigation } from "@/hooks/useBottomSheetNavigation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { modalBottomSheetAtom } from "../atoms/BottomSheet/BottomSheetAtom";
import { formatPhone } from "../utils/formatPhone.utils";
import { Footer } from "@/screens/onboarding/components/Footer";
import { Button } from "@/components/Button";
import { useNavigation } from "@/hooks/useNavigation";
import { PagesEnum } from "../atoms/StepNavigation/stepsNavigationAtom.atoms";

export const Credentials = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [modalState] = useAtom(modalBottomSheetAtom);
  const { onAction } = useBottomSheetNavigation();
  const [birthdateText] = useState<string>("");
  const inputRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();

  const onApplyMask = (input: string) => {
    const masked = formatPhone(input);
    setPhone(masked);
  };

  return (
    <View className="flex-1">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-1 gap-[16] px-6">
              <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
                Create an account
              </Text>
              <Text className="text-md text-center font-bold text-white font-notosans leading-[1.8]">
                Please complete your profile. Don`t worry, your data will remain
                private and only you can see it.
              </Text>

              <View className="flex gap-10 mt-4">
                <Input fieldText="Full name" placeholder="insert your name" />
                <View className="relative">
                  <Pressable onPress={() => modalState?.ref?.current?.expand()}>
                    <Input
                      ref={inputRef}
                      placeholder="insert your birthdate"
                      onFocus={() => {
                        inputRef.current?.blur();
                        setOpen(true);
                      }}
                      onPressIn={() => onAction.open("dateBirthday")}
                      editable={false}
                      fieldText="Date of birth"
                      value={birthdateText}
                    />
                  </Pressable>

                  <TouchableOpacity
                    onPress={() => {
                      if (open) {
                        inputRef.current?.blur();
                      }
                      setOpen((prev) => !prev);
                      onAction.open("dateBirthday");
                    }}
                  >
                    <View className="absolute right-2 bottom-4 flex items-center justify-center">
                      <MaterialCommunityIcons
                        name="calendar-text-outline"
                        size={24}
                        color="#4f46e5"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <Input
                  placeholder="insert your country"
                  fieldText="Country"
                  onPress={() => onAction.open("country")}
                  editable={false}
                />

                <Input
                  placeholder="insert your phone number"
                  fieldText="Phone number"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={onApplyMask}
                />
              </View>
            </View>
            <View style={{ height: 30 }} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer maxHeight={100}>
        <Button
          onPress={() => {
            navigate.go(PagesEnum.FINISH_CREDENTIALS);
          }}
          label="GET STARTED"
        />
      </Footer>
    </View>
  );
};
