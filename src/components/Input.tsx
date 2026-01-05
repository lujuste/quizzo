import React, { forwardRef } from "react";
import {
  Text,
  TextInput,
  View,
  type KeyboardType,
  type TextInputProps,
} from "react-native";

type Props = {
  fieldText: string;
  keyboardType?: KeyboardType;
} & TextInputProps;

export const Input = forwardRef<TextInput, Props>(
  ({ fieldText, keyboardType, ...rest }, ref) => {
    return (
      <View className="flex gap-5">
        <Text className="text-white font-notosansbold">{fieldText}</Text>
        <TextInput
          ref={ref}
          keyboardType={keyboardType}
          className="border-b-2 border-b-solid border-b-indigo-600 pb-3 h-10 text-white font-notosansbold "
          placeholderTextColor="#52525b"
          {...rest}
        />
      </View>
    );
  }
);
