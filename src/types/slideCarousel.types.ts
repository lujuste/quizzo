import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

export type SlideCarousel = {
  id: string;
  title: string;
  image: FC<SvgProps>;
};
