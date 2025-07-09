import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {} & TouchableOpacityProps;

export const Back = ({ ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>
  );
};
