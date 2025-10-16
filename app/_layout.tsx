import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar'
import './global.css'

export default function RootLayout() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack screenOptions={{ headerShown: false, contentStyle: {
        backgroundColor: '#090909'
      } }}>
        <Stack.Screen name="home/index" />
        <Stack.Screen name="auth/index" />
      </Stack>
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}
