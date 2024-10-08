import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type ChefScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Chef'>;

type Props = {
  navigation: ChefScreenNavigationProp;
};

export default function Chef({ navigation }: Props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('Main');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const addCourse = () => {
    if (name && type && price && description) {
      navigation.navigate('Menu', {
        newCourse: {
          name,
          type, 
          price,
          description,
        },
      });
      setName('');
      setType('Main');
      setPrice('');
      setDescription('');
    } else {
      Alert.alert('Error', 'All fields must be filled out');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Course</Text>

      {/* Picker comes first */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          style={styles.picker}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Drinks" value="Drinks" />
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>
      </View>

      {/* Course Name input moved below Picker */}
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={name}
        onChangeText={(text) => {
          console.log('Course Name:', text);  // Debugging log
          setName(text);
        }}
      />

      {/* Price input comes after the Course Name */}
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={(text) => {
          console.log('Price:', text);  // Debugging log
          setPrice(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => {
          console.log('Description:', text);  // Debugging log
          setDescription(text);
        }}
      />

      <Button title="Add Course" onPress={addCourse} />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6bccc',
  },
  header: {
    fontSize: 24,
    marginBottom: 30,  
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 5,
    width: 250,
    marginBottom: 25,  
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    height: 50,
    width: 250,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 25,  
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
});
