import { useBottomSheetNavigation } from "@/hooks/useBottomSheetNavigation";
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const label = {
  country: "country",
  dateBirthday: "your birthdate",
};

export const CustomBackground = (props: BottomSheetBackgroundProps) => {
  const { currentField } = useBottomSheetNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <View className="flex-1 items-center">
        <Text className="mt-10 font-notosans text-white">{`Select ${label[currentField]}:`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
});
