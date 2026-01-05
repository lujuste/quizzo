import type { SlideCarousel } from "@/types/slideCarousel.types";
import { View, type FlatList } from "react-native";
import type { AnimatedRef, SharedValue } from "react-native-reanimated";
import { Dot } from "../Dot";

type Props = {
  data: SlideCarousel[];
  axisX: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<SlideCarousel>>;
  flatListIndex: SharedValue<number>;
};

export const Pagination = ({
  data,
  axisX,
  flatListIndex,
  flatListRef,
}: Props) => {
  return (
    <View className="flex-row h-40 justify-center items-center gap-2.5 mt-4">
      {data.map((onboarding, index) => (
        <Dot
          key={onboarding.id}
          index={index}
          axisX={axisX}
          flatListIndex={flatListIndex}
          flatListRef={flatListRef}
        />
      ))}
    </View>
  );
};
