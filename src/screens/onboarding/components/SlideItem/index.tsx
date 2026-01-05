import type { SlideCarousel } from "@/types/slideCarousel.types";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import LottieView from "lottie-react-native";

type Props = {
  item: SlideCarousel;
  index: number;
  axisX: SharedValue<number>;
};

export const SlideItem = ({ item }: Props) => {
  const { image: ImageSource, title } = item;
  const { width } = useWindowDimensions();

  const isAnimation = Boolean(typeof ImageSource === "string");

  return (
    <View style={{ width }} className="flex-1 items-center">
      {isAnimation ? (
        <LottieView
          source={{ uri: ImageSource as string }}
          autoPlay
          loop
          style={{ width: width * 0.9, height: 360 }}
          resizeMode="contain"
        />
      ) : (
        <ImageSource width={width} height={360} />
      )}
      <View className="px-6">
        <Text className="text-white leading-[1.65] text-center font-notosansbold text-3xl">
          {title}
        </Text>
      </View>
    </View>
  );
};
