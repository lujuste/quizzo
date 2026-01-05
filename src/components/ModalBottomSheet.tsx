import { countries } from "@/constants/countries";
import { useBottomSheetNavigation } from "@/hooks/useBottomSheetNavigation";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { CustomBackground } from "./BackgroundCustom";
import { Button } from "./Button";
import { CustomBackdrop } from "./CustomBackdrop";

export const ModalBottomSheet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {
    date,
    dateRef,
    setDate,
    snapPoints,
    handleSheetChanges,
    bottomSheetRef,
    currentField,
  } = useBottomSheetNavigation();

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose
      onChange={handleSheetChanges}
      backdropComponent={CustomBackdrop}
      backgroundComponent={CustomBackground}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          className="flex justify-center items-center mt-[-10]"
        >
          {currentField === "country" ? (
            <>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, _itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                style={{ width: 400, height: 150, color: "#fff" }}
              >
                {countries.map((country) => (
                  <Picker.Item
                    key={country.code}
                    label={`${country.code} - ${country.name}`}
                    value={`${country.name}`}
                    color="#ffffff"
                  />
                ))}
              </Picker>
              <View className="flex-row w-28 gap-3 items-end h-32">
                <Button label="Cancel" variant="secondary" isSmall />
                <Button
                  onPress={() => {
                    if (dateRef.current) {
                      setDate(dateRef.current);
                      // setBirthdateText(dateRef.current.toLocaleDateString());
                    }
                    // setOpen(false);
                    // inputRef.current?.blur();
                  }}
                  label="Confirm"
                  variant="primary"
                  isSmall
                />
              </View>
            </>
          ) : (
            <>
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
              <View className="flex-row h-8 flex-1 w-28 gap-3">
                <Button label="Cancel" variant="secondary" isSmall />
                <Button
                  onPress={() => {
                    if (dateRef.current) {
                      setDate(dateRef.current);
                      // setBirthdateText(dateRef.current.toLocaleDateString());
                    }
                    // setOpen(false);
                    // inputRef.current?.blur();
                  }}
                  label="Confirm"
                  variant="primary"
                  isSmall
                />
              </View>
            </>
          )}
        </Animated.View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
    width: "100%",
  },
});
