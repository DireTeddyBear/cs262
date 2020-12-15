import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = React.useState(0);
  const [name, setName] = React.useState('jmg64');
  const [birthdays, setBirthdays] = React.useState([]);
  
  return (
    <View style={styles.container}>
	  <Text>Enter your name</Text>
	  
	  <TextInput 
	  style={styles.input}
	  onChangeText={text => setName(text)} 
	  value={name}/>
	  
	  <Text>{name} is {age} years old</Text>
	  <Button onPress={() => {
		var newBirthday = age +1
		setBirthdays(birthdays.concat({key: newBirthday.toString()}))
	    setAge(newBirthday)
	  }} title="Birthday" />
	  <FlatList

		  data={birthdays}
		  renderItem={({item}) => (
		  	<Text>{item.key}</Text>
		  )} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
	
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
	
    borderColor: '#777',
	
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    marginTop: 20
  }
});
