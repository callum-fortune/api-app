import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex h-screen items-center justify-center">

      <Text className="bg-red-400 px-4 py-2 text-white">Hello, world!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
};
