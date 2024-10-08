import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Chef from './screens/Chef';

// Define the type for route parameters
export type RootStackParamList = {
  Home: undefined;
  Menu: { newCourse?: { name: string; type: string; price: string; description: string } }; // Route params for Menu screen
  Chef: undefined;
};

const Stack = createStackNavigator<RootStackParamList>(); // Pass the param list to createStackNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Chef" component={Chef} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
