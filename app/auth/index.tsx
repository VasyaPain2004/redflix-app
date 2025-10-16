import { FC } from "react";
import { Text, TextInput, View } from "react-native";

const Auth: FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="color-white text-2xl mb-2.5">Login</Text>
      <TextInput placeholder="Enter email"></TextInput>
      <TextInput placeholder="Enter password"></TextInput>
    </View>
  );
};

export default Auth;
