import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='FirstScreen'
          component={FirstScreen}
          options={{ title: 'First Screen' }}
        />
        <Stack.Screen
          name='SecondScreen'
          component={SecondScreen}
          options={{ title: 'Second Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
