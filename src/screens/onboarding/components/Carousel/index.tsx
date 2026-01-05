import { slides } from "@/constants/onboarding/slides";
import type { SlideCarousel } from "@/types/slideCarousel.types";
import { FlatList, View, ViewToken } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Pagination } from "../Pagination";
import { SlideItem } from "../SlideItem";

export const Carousel = () => {
  const flatListRef = useAnimatedRef<FlatList<SlideCarousel>>();
  const axisX = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      axisX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
    }
  };

  return (
    <View className="flex-1 bg-zinc-950 relative">
      <Animated.FlatList<SlideCarousel>
        ref={flatListRef}
        data={slides}
        renderItem={({ item, index }) => {
          return <SlideItem item={item} index={index} axisX={axisX} />;
        }}
        onScroll={onScroll}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View className="absolute bottom-20 left-0 right-0 mx-5  z-10 h-14">
        <Pagination
          data={slides}
          axisX={axisX}
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
        />
      </View>
    </View>
  );
};
