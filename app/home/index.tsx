import { router } from "expo-router";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

const Home: FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Pressable onPress={() => router.push("/auth")}>
        <Text className="text-red-500">Go to login</Text>
      </Pressable>
    </View>
  );
};

export default Home;
