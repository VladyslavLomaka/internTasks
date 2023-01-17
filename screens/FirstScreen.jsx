import { View, Text, TouchableOpacity } from 'react-native';

export default function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={{ fontSize: 24, letterSpacing: 4 }}>This is first screen!</Text>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 4,
            textAlign: 'center',
            marginTop: 10,
            color: 'gray',
          }}>
          Touch me -.-
        </Text>
      </TouchableOpacity>
    </View>
  );
}
