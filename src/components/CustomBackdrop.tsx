import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  Extrapolation,
} from "react-native-reanimated";
import { useAtom } from "jotai";
import { modalBottomSheetAtom } from "@/screens/register/atoms/BottomSheet/BottomSheetAtom";

export const CustomBackdrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const [modalState, setModalState] = useAtom(modalBottomSheetAtom);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 0.9],
      Extrapolation.CLAMP
    ),

    pointerEvents: modalState.isVisible ? "auto" : "none",
  }));

  const containerStyle = useMemo(
    () => [
      styles.backdrop,
      style,
      { backgroundColor: "#000" },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  const handlePress = () => {
    modalState.ref?.current?.close();
    setModalState((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <Pressable
      style={styles.backdrop}
      onPress={handlePress}
      pointerEvents={modalState.isVisible ? "auto" : "none"}
    >
      <Animated.View style={containerStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
});
