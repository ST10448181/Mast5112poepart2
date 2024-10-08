import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native'; // Import Image component
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Adjust the import path if necessary

// Define the props for the Home screen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Add your logo/image here */}
      <Image 
        source={require('../assets/images/chef.jpg')} // Make sure this path is correct
        style={styles.logo} // Add styling for the image
      />
      <Text style={styles.title}>Welcome to Chippy App</Text>

      {/* Button to navigate to Chef login */}
      <Button title="Chef Login" onPress={() => navigation.navigate('Chef')} />

      {/* Add some space between buttons */}
      <View style={styles.buttonSpacing} /> 

      {/* New Button to navigate to Menu page */}
      <Button title="Order" onPress={() => navigation.navigate('Menu', { newCourse: undefined })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6bccc', // Optional: add a background color
  },
  title: {
    fontSize: 32, // Make the title beautiful
    fontWeight: 'bold', // Add bold font weight
    marginBottom: 20,
    color: '#333', // Optional: change the text color
  },
  logo: {
    width: 200, // Adjust width as necessary
    height: 200, // Adjust height as necessary
    marginBottom: 20, // Add some space below the image
    resizeMode: 'contain', // Ensure the image fits well
  },
  buttonSpacing: {
    height: 10, // Adds space between the two buttons
  },
});
