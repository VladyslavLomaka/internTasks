import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleBottomNavigationView = () => {
    setIsVisible(!isVisible);
  };

  console.log(isVisible);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <Text style={{ fontSize: 24, letterSpacing: 4 }}>SHOW BOTTOM SHEET</Text>
      </TouchableOpacity>
      <BottomSheet
        visible={isVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={styles.bottomNavigationView}>
          <Text style={{ fontSize: 24, letterSpacing: 4 }}>Hello</Text>
        </View>
      </BottomSheet>
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
  bottomNavigationView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
