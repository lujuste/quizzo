import { colorsScheme, type Variants } from "@/constants/colors";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

type Props = {
  label: string;
  variant?: Variants;
} & TouchableOpacityProps;

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={{
        opacity: disabled ? 0.2 : 1,
      }}
      className={`w-full h-16 ${colorsScheme[variant]} rounded-[22] flex items-center justify-center `}
    >
      <Text
        className="text-white font-notosansbold font-bold
"
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
