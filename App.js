import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex h-screen items-center justify-center">

      <View className="bg-black px-4 py-2 rounded-lg">
        <Text className="text-white text-[20px]">Hello, world!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};
