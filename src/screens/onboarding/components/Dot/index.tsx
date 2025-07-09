import type { SlideCarousel } from "@/types/slideCarousel.types";
import { Pressable, useWindowDimensions, type FlatList } from "react-native";
import type { AnimatedRef, SharedValue } from "react-native-reanimated";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  index: number;
  axisX: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<SlideCarousel>>;
  flatListIndex: SharedValue<number>;
};

export const Dot = ({ index, axisX, flatListIndex, flatListRef }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const onAnimatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      axisX.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [10, 32, 10],
      Extrapolation.CLAMP
    );

    const backgroundColor = interpolateColor(
      axisX.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      ["#18181b", "#6366f1", "#18181b"]
    );

    return {
      width: widthAnimation,
      backgroundColor,
    };
  });

  return (
    <Pressable
      onPress={() => {
        flatListRef.current.scrollToIndex({
          index,
        });
      }}
    >
      <Animated.View
        className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full "
        style={[{}, onAnimatedDotStyle]}
      ></Animated.View>
    </Pressable>
  );
};
