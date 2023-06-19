import React, { useEffect } from "react";
import { Stack as StackRouter, ErrorBoundary, SplashScreen } from "expo-router";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";
import config from "../tamagui.config";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return <SplashScreen />;
  }

  const Stack = createNativeStackNavigator();
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
              }}
            >
              <Stack.Screen
                name="Home"
                component={Header}
                options={{ title: 'My home' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
