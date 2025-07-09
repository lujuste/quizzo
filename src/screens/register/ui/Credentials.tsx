import { Input } from "@/components/Input";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  type TextInput,
} from "react-native";

import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Picker } from "@react-native-picker/picker";

export const Credentials = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const [birthdateText, setBirthdateText] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const inputRef = useRef<TextInput>(null);
  const dateRef = useRef<Date | null>(null);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (inputRef.current?.isFocused?.()) {
          inputRef.current.blur();
        }
        setOpen(false);
      }}
    >
      <View className="flex-1 gap-[16] px-6">
        <Text className="text-3xl mt-2 text-center font-bold text-white font-notosansbold leading-[1.8]">
          Create an account
        </Text>
        <Text className="text-md text-center font-bold text-white font-notosans leading-[1.8]">
          Please complete your profile. Don`t worry, your data will remain
          private and only you can see it.
        </Text>
        <ScrollView keyboardShouldPersistTaps="never">
          <View className="flex gap-10 mt-4">
            <Input fieldText="Full name" placeholder="insert your name" />
            <View className="relative">
              <Input
                ref={inputRef}
                placeholder="insert your birthdate"
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                fieldText="Date of birth"
                value={birthdateText}
              />
              <TouchableOpacity
                onPress={() => {
                  if (open) {
                    inputRef.current?.blur();
                  }

                  setOpen((prev) => !prev);
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

            {open && (
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                className="flex justify-center items-center mt-[-40]"
              >
                <RNDateTimePicker
                  value={date}
                  maximumDate={new Date()}
                  display="spinner"
                  themeVariant="dark"
                  onChange={(_event, selectedDate) => {
                    if (selectedDate) {
                      dateRef.current = selectedDate;
                    }
                  }}
                />

                <View className="flex-row h-8 flex-1 w-24 gap-3">
                  <Button
                    onPress={() => {
                      setOpen(false);
                      inputRef.current.blur();
                    }}
                    label="Cancel"
                    variant="secondary"
                    isSmall
                  />
                  <Button
                    onPress={() => {
                      if (dateRef.current) {
                        setDate(dateRef.current);
                        setBirthdateText(dateRef.current.toLocaleDateString());
                      }
                      setOpen(false);
                      inputRef.current?.blur();
                    }}
                    label="Confirm"
                    variant="primary"
                    isSmall
                  />
                </View>
              </Animated.View>
            )}

            <Input fieldText="Country" onFocus={() => setModal(true)} />
            <View className="mt-[-32]">
              <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(false)}
              >
                <View style={styles.modalContent}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                  </View>
                  <Picker
                    mode="dialog"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }
                  >
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                    <Picker.Item
                      style={{ color: "#fff" }}
                      label="Java"
                      value="java"
                      color="white"
                    />
                  </Picker>
                </View>
              </Modal>
            </View>
            <Input fieldText="Phone number" />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
