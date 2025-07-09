import { colorsScheme, type Variants } from "@/constants/colors";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

type Props = {
  label: string;
  variant?: Variants;
  isSmall?: boolean;
} & TouchableOpacityProps;

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  isSmall = false,
  ...rest
}: Props) => {
  const classNames = isSmall ? "h-8" : "h-14";

  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={{
        opacity: disabled ? 0.2 : 1,
      }}
      className={`w-full ${classNames} ${colorsScheme[variant]} rounded-[22] flex items-center justify-center`}
    >
      <Text
        style={{
          fontSize: isSmall ? 12 : 16,
        }}
        className={`${
          isSmall ? "font-notosans" : "font-notosansbold"
        } text-white font-bold`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
