import React, { forwardRef } from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";

type Props = {
  fieldText: string;
} & TextInputProps;

export const Input = forwardRef<TextInput, Props>(
  ({ fieldText, ...rest }, ref) => {
    return (
      <View className="flex gap-5">
        <Text className="text-white font-notosans">{fieldText}</Text>
        <TextInput
          ref={ref}
          className="border-b-2 border-b-solid border-b-indigo-600 pb-3 h-10 text-white "
          placeholderTextColor="#52525b"
          {...rest}
        />
      </View>
    );
  }
);
