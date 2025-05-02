import { Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
export default function Player() {
  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute top-16 left-4"
      >
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>
      <Text className="text-2xl font-bold text-white">Player</Text>
    </View>
  );
}
