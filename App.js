import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fonts] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    'OpenSans-Italic': require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),
  });

  if (!fonts) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'OpenSans-Regular' }}>Hello World!</Text>
      <Text style={{ fontFamily: 'OpenSans-Bold' }}>Hello World!</Text>
      <Text style={{ fontFamily: 'OpenSans-Italic' }}>Hello World!</Text>
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
