import { colorsScheme } from "@/constants/colors";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

type Props = {
  steps: number;
  step: number;
  porcentage: number;
};

export const ProgressBar = ({ step, steps }: Props) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const percentage = (step / steps) * 100;

    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [step, steps]);

  return (
    <View className="mb-6 h-2 w-52 bg-zinc-800 rounded-xl ">
      <Animated.View
        className={`h-2 rounded-xl ${colorsScheme.primary}`}
        style={{
          width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
        }}
      />
    </View>
  );
};
