import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';  // Import RouteProp for route typing
import { RootStackParamList } from './types';  // Ensure this is correctly defined

// Define the allowed menu categories
type MenuCategory = 'Main' | 'Drinks' | 'Desserts' | 'Starters';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;
type MenuScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;  // Add RouteProp for route

type Props = {
  navigation: MenuScreenNavigationProp;
  route: MenuScreenRouteProp;  // Include route prop for receiving params
};

export default function Menu({ navigation, route }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Main');
  const menuData: Record<MenuCategory, string[]> = {
    Main: ['Pizza R89.00 ', 'Creamy Pasta R120.00', 'Burger R120.00'],
    Drinks: ['Water R23.00', 'Red Wine R60.00', 'Juice R35.00'],
    Desserts: ['Cake R110.00', 'Ice Cream R90.00', 'Pudding R104.00'],
    Starters: ['Soup R50.00', 'Salad R70.00', 'Bruschetta R80.00'],
  };

  // Check for new course added via the Chef screen
  const { newCourse } = route.params || {};  // Extract newCourse from route.params if available
  if (newCourse) {
    menuData[selectedCategory].push(`${newCourse.name} R${newCourse.price}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu - {selectedCategory}</Text>

      <View style={styles.buttonGroup}>
        <Button title="Main" onPress={() => setSelectedCategory('Main')} />
        <Button title="Drinks" onPress={() => setSelectedCategory('Drinks')} />
        <Button title="Desserts" onPress={() => setSelectedCategory('Desserts')} />
        <Button title="Starters" onPress={() => setSelectedCategory('Starters')} />
      </View>

      <FlatList
        data={menuData[selectedCategory]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.courseItem}>{item}</Text>}
      />

      <Button title="Go to Chef" onPress={() => navigation.navigate('Chef')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    backgroundColor: '#e6bccc',  // Added background color
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  courseItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});
