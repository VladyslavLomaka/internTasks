import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TwitterPixel from './components/TwitterPixelSvg';
import TwitterOriginal from './components/TwitterOriginalSvg';

export default function App() {
  return (
    <View style={styles.container}>
      <TwitterOriginal
        width={120}
        height={40}
        fill='black'
        marginBottom={20}
      />
      <TwitterPixel
        width={120}
        height={40}
        fill='blue'
      />
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
