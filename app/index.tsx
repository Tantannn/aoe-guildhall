import { Text, YStack } from "tamagui";
import React from "react";
import { useRouter } from "expo-router";

import { Image } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <YStack space="$2" p={"$2"} bg="$gray2" flex={1}>
      <Text>Hello</Text>
    </YStack>
  );
}
