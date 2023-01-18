import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

setTimeout(() => {
  SplashScreen.hideAsync();
}, 5000);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ letterSpacing: 3, textAlign: 'center', paddingHorizontal: 20 }}>
        actually, it was custom splash screen, by the way!
      </Text>
      <Text style={{ color: '#d1d2d3', letterSpacing: 2, marginTop: 20 }}>
        relpad app to watch again
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
