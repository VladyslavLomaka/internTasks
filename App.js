import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        I got that your device is {Device.deviceName} by {Device.brand}
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
