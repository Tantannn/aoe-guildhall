import React from 'react'
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Image
      style={{ width: 50, height: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text>Hello</Text>
    </View>
  )
}
