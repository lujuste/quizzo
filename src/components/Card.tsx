import Octicons from "@expo/vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  label: string;
  index: number;
  onSelect(selectedItem: string): void;
  isActive: boolean;
};

type OccupationColor = {
  color: string;
  icon: string;
  gradient: [string, string];
};

const color: Record<number, OccupationColor> = {
  0: {
    color: "bg-indigo-600",
    icon: "people",
    gradient: ["#6a63e9", "#4f46e5"],
  },
  1: {
    color: "bg-orange-400",
    icon: "book",
    gradient: ["#f7945f", "#ea580c"],
  },
  2: {
    color: "bg-emerald-400",
    icon: "mortar-board",
    gradient: ["#07d593", "#059669"],
  },
  3: {
    color: "bg-pink-700",
    icon: "briefcase",
    gradient: ["#c90d5b", "#f12278"],
  },
};

export const Card = ({ label, index, onSelect, isActive }: Props) => {
  const handleClickOption = (selectedItem: string) => {
    onSelect(selectedItem);
  };

  return (
    <LinearGradient
      colors={color[index].gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 16,
        padding: isActive ? 1 : 0,
        borderWidth: 1,
        borderColor: color[index].color,
      }}
    >
      <TouchableOpacity
        onPress={() => handleClickOption(label)}
        style={{ borderRadius: 14, overflow: "hidden" }}
      >
        <View className="flex-1 flex-row border-[1px] border-zinc-700 border-solid items-center h-24 rounded-[14] bg-zinc-900">
          <View className="flex w-24 h-full rounded-bl-[14] items-center justify-center rounded-tl-[14] overflow-hidden">
            <LinearGradient
              colors={color[index].gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
            <View className="relative w-24 h-full items-center justify-center">
              <View className="flex w-12 h-12 bg-black opacity-[0.1] rounded-full items-center justify-center" />
              <View
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: [{ translateX: -12 }, { translateY: -12 }],
                }}
              >
                <Octicons
                  name={color[index].icon as any}
                  size={24}
                  color="white"
                />
              </View>
            </View>
          </View>
          <Text className="text-xl ml-8 text-center font-bold text-white font-notosansbold">
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};
