import type { SlideCarousel } from "@/types/slideCarousel.types";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import type { SharedValue } from "react-native-reanimated";

type Props = {
  item: SlideCarousel;
  index: number;
  axisX: SharedValue<number>;
};

export const SlideItem = ({ item }: Props) => {
  const { image: SvgComponent, title } = item;
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }} className="flex-1 items-center">
      <SvgComponent width={width} height={400} />
      <View className="px-6 ">
        <Text className="text-white leading-[1.8] text-center font-notosansbold text-3xl">
          {title}
        </Text>
      </View>
    </View>
  );
};
