import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          showMessage({
            message: 'Boom!',
            description: 'You got it!',
            type: 'success',
          });
        }}>
        <Text style={{ fontSize: 24, letterSpacing: 6 }}>Splash!</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
      <FlashMessage
        position='center'
        style={{ width: '50%', alignItems: 'center' }}
      />
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
